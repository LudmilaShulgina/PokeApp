import React, { useState, useEffect, useRef } from 'react';
import { Card, Badge } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const { Meta } = Card;
//import dog from '../assets/styles/modules/button.module.css';
import styles from '../assets/styles/modules/card.module.scss';

import Img from '../assets/images/question.jpg';
import * as classnames from 'classnames';

const PokeCard = ({
  name = 'No name',
  url,
  tag,
  isSelected,
  isLiked,
  onClick,
  age = 0,
}) => {
  const [clicked, setClicked] = useState();
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, [name]);

  useEffect(() => {
    if (clicked) {
      doItLater();
    }
  }, [clicked]);

  const doItLater = () => {
    console.log('doItLater', clicked);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  const handleClick = () => {
    onClick(name);
    setClicked(true); //true
    console.log('handleClick', clicked); //undefined
    //console.log(`Click ${name}`);
  };

  const handleMouseEnter = () => {
    //console.log(`Mouse enter ${name}`);
  };

  return (
    <Badge offset={[-20, 20]} count={isLiked ? <HeartFilled /> : null}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt='example' src={Img} />}
        className={classnames(styles[tag], {
          [styles.selected]: isSelected,
          [styles.clicked]: clicked,
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        <Meta title={`${name} - ${age}`} description={url} />
        <button ref={ref}>Я кнопка</button>
      </Card>
    </Badge>
  );
};

export default PokeCard;
