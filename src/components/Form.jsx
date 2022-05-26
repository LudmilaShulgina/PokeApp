import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Demo = (props) => {
  const [state, setState] = useState(props);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    setState({
      ...props,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleRedirect = () => {
    //navigate(`/?index=${state.index}`);

    navigate({
      pathname: '/',
      search: `?${createSearchParams({
        index: state.index,
      })}`,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input data-name={'name'} value={state.name} onChange={handleChange} />

        <input
          data-name={'pockemon'}
          value={state.pockemon}
          onChange={handleChange}
        />

        <input
          type={'number'}
          placeholder={'Покемонов номер'}
          data-name={'index'}
          value={state.index}
          onChange={handleChange}
        />

        <button onClick={handleCancel}>Cansel</button>
      </form>

      {(state.index || state.index === 0) && (
        <button onClick={handleRedirect}>
          {' '}
          {`Откройте мне этого покемона #${state.index}`}{' '}
        </button>
      )}
    </>
  );
};

export default Demo;
