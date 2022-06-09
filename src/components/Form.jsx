import React, { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import * as classnames from 'classnames';
import styles from '../assets/styles/modules/card.module.scss';

const Demo = (props) => {
  const [state, setState] = useState(props);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChangeForm = () => {
    alert('Form Change');
  };

  const handleChange = (event) => {
    event.stopPropagation();
    //alert('Input Change');
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

  const checkValidation = () => {
    const newErrors = Object.keys(state).reduce((account, item) => {
      switch (item) {
        case 'pockemon':
        case 'name':
          account = {
            ...account,
            [item]: state[item].trim().length > 0 ? undefined : 'Пустое поле',
          };
          break;
        case 'index':
          account = {
            ...account,
            [item]: state[item] > 0 ? undefined : 'Индекс меньше нуля',
          };
          break;
      }
      return account;
    }, {});

    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValidation();
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
      <form onSubmit={handleSubmit} onChange={handleChangeForm}>
        <label>
          <input
            data-name={'name'}
            value={state.name}
            onChange={handleChange}
            className={classnames({
              [styles.error]: !!errors?.name,
            })}
          />
          {errors.name}
        </label>
        <br />

        <label>
          <input
            data-name={'pockemon'}
            value={state.pockemon}
            onChange={handleChange}
            className={classnames({
              [styles.error]: !!errors?.pockemon,
            })}
          />
          {errors.pockemon}
        </label>
        <br />
        <label>
          <input
            type={'number'}
            placeholder={'Покемонов номер'}
            data-name={'index'}
            value={state.index}
            onChange={handleChange}
            className={classnames({
              [styles.error]: !!errors?.index,
            })}
          />
          {errors.index}
        </label>
        <br />
        <button onClick={handleCancel}>Cansel</button>
        <button onClick={handleSubmit}>Submit</button>
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
