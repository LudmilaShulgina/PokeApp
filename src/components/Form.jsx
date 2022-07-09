import React, { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import * as classnames from 'classnames';
import styles from '../assets/styles/modules/card.module.scss';

const Demo = (props) => {
  const [state, setState] = useState(props);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('itgirlschool/api/words')
      .then((response) => response.json())
      .then((response) => console.log('response', response))
      .catch((errors) => console.log('error', errors));

    //https://pokeapi.co/api/v2/pokemon/ditto
    fetch('/pokeapi/api/v2/pokemon/ditto')
      .then((response) => response.json())
      .then((response) => console.log('response', response))
      .catch((errors) => console.log(errors));
  }, []);

  const handleChangeForm = () => {
    //alert('Form Change');
    checkValidation();
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

  // const fetchPock = async () => {
  //   fetch('itgirlschool/api/words', {
  //     method: 'POST', // или 'PUT'
  //     body: JSON.stringify({
  //       id: '11346',
  //       english: 'potato',
  //       transcription: '[potata]',
  //       russian: 'картошка',
  //       tags: 'овощи',
  //       tags_json: '["u043eu0432u043eu0449u0438"]',
  //     }), // данные могут быть 'строкой' или {объектом}!
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValidation();
    console.log('handleSubmit');
    //Здесь может как раз произойти запрос на изменение слова (если у вас нет контекста. Если есть- то переносим туда)
    //Изменение слова
    // fetch(`itgirlschool/api/words/${word.id}/update`, {
    //   method: 'POST', // или 'PUT'
    //   body: JSON.stringify(word), // данные могут быть 'строкой' или {объектом}!
    // }).then(()=>{
    //   //getWods()
    //   console.log("Ура!")
    //   });
    // }

    // fetch(`itgirlschool/api/words/${word.id}/delete`, {
    //   method: 'POST', // или 'PUT'
    //   body: JSON.stringify(word), // данные могут быть 'строкой' или {объектом}!
    // }).then(()=>{
    //   //getWods()
    //   console.log("Ура!")
    //   });
    // }

    fetch(`itgirlschool/api/words/11346/update`, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify({
        id: '11346',
        english: 'potato',
        transcription: '[potata]',
        russian: 'картошка',
        tags: 'овощи',
        tags_json: '["u043eu0432u043eu0449u0438"]',
      }), // данные могут быть 'строкой' или {объектом}!
    }).then(() => {
      //getWods()
      console.log('Ура!');
    });
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
