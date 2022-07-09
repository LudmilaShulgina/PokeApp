import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Col, Row, Button } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { PockemonContext } from '../context/pockemonContext';
import { WordsContext } from '../context/wordsContext';
import PokeCard from './PokeCard';
import useLocalStorage from '../hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const PokeGrid = () => {
  const { pockemons } = useContext(PockemonContext); //[]
  const { words, editWords, deleteWords } = useContext(WordsContext); //[]
  const [pockemonCollection, setpockemonCollection] = useState(pockemons); //[]
  const [pockemon, setPockemon] = useLocalStorage('pockemon', []);
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setpockemonCollection(pockemons);
  }, [pockemons]);

  const checkIndex = useCallback(
    (index) => {
      if (!index) {
        return 0;
      }

      if (index < 0) {
        return pockemonCollection.length - 1;
      } else if (index >= pockemonCollection.length) {
        return 0;
      }
      return index;
    },
    [pockemonCollection]
  );

  useEffect(() => {
    const index = searchParams.get('index');
    const newIndex = checkIndex(index);
    setIndex(newIndex);
  }, [location, checkIndex]);

  const handleClickCard = (name) => {
    // window.localStorage.setItem(
    //   'pockemon',
    //   JSON.stringify([...pockemon, name])
    // );
    setPockemon([...pockemon, name]);

    //Буду по клику ставить лайки покемонам
    const newLikes = likes.includes(name)
      ? likes.filter((i) => i !== name)
      : [...likes, name];
    setLikes(newLikes);
  };

  const handleDelete = () => {
    //Вариант №1
    const array = [...pockemonCollection]; // make a separate copy of the array
    array.splice(index, 1);
    setpockemonCollection(array);
    //getPockemons();

    //Вариант №2
    // const array = pockemonCollection.filter((item,count)=> index !== count); // make a separate copy of the array
    // setpockemonCollection(array);

    //ToDo: есть проблема что карточки закончатся и отрисовывать нечего будет
  };

  const handleClickButtons = (direction) => {
    //'left'
    let newIndex = index;
    switch (direction) {
      case 'right':
        ++newIndex;
        break;
      case 'left':
        --newIndex;
        break;
      default:
        ++newIndex;
    }

    newIndex = checkIndex(newIndex);
    setSearchParams({ index: newIndex });
  };

  return (
    <>
      <Row gutter={[16, 16]} className={'grid'}>
        <Col
          span={16}
        >{`Всего лайков: ${likes.length}/${pockemonCollection.length}`}</Col>
      </Row>
      <Row gutter={[16, 16]} className={'grid'}>
        <Col span={4}>
          <Button
            type='primary'
            shape='circle'
            icon={<LeftOutlined />}
            size={'large'}
            onClick={() => handleClickButtons('left')}
          />
        </Col>
        <Col span={8}>
          <PokeCard
            onClick={handleClickCard}
            tag={'yellow'}
            name={
              pockemonCollection[index] ? pockemonCollection[index].name : ''
            }
            url={pockemonCollection[index] ? pockemonCollection[index].url : ''}
            age={index}
            isLiked={
              pockemonCollection[index]
                ? likes.includes(pockemonCollection[index].name)
                : false
            }
          />
        </Col>
        <Col span={4}>
          <Button
            type='primary'
            shape='circle'
            icon={<RightOutlined />}
            size={'large'}
            onClick={() => handleClickButtons('right')}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} className={'grid'}>
        <Col span={4}>
          <Button
            danger
            type='primary'
            shape='circle'
            icon={<CloseCircleOutlined />}
            size={'large'}
            onClick={handleDelete}
          />
        </Col>
      </Row>
    </>
  );
};

export default PokeGrid;
