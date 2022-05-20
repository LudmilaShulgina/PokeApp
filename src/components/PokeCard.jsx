import React from 'react';
import { Card } from 'antd';
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
  onClick,
  age = 0,
}) => {
  const handleClick = () => {
    console.log(12, name);
    onClick(name);

    //console.log(`Click ${name}`);
  };

  const handleMouseEnter = () => {
    //console.log(`Mouse enter ${name}`);
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt='example' src={Img} />}
      className={classnames(styles[tag], {
        [styles.selected]: isSelected,
      })}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <Meta title={`${name} - ${age}`} description={url} />
    </Card>
  );
};

export default PokeCard;
