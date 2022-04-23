import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

import Img from '../assets/images/question.jpg';

const PokeCard = ({ name, url }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt='example' src={Img} />}
    >
      <Meta title={name} description={url} />
    </Card>
  );
};

export default PokeCard;
