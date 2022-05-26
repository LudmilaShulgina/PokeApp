import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = (props) => {
  const { children, to, ...others } = props;
  const match = useMatch(to);
  const style = {
    color: match ? 'red' : 'black',
  };

  return (
    <Link to={to} style={style} {...others}>
      {children}
    </Link>
  );
};

export default CustomLink;
