import React from 'react';
import { Row } from 'antd';

const PokeGrid = ({ children }) => {
  return <Row gutter={[16, 16]}>{children}</Row>;
};

export default PokeGrid;
