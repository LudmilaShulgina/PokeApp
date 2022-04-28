import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
//import dog from '../assets/styles/modules/button.module.css';
import styles from '../assets/styles/modules/card.module.scss';

import Img from '../assets/images/question.jpg';

const PokeCard = ({ name, url, tag }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt='example' src={Img} />}
      className={styles[tag]}
    >
      <Meta title={name} description={url} />
    </Card>
  );
};

export default PokeCard;
