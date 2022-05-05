import React, { useState } from 'react';

const Demo = (props) => {
  const [state, setState] = useState(props);

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

  return (
    <form onSubmit={handleSubmit}>
      <input data-name={'name'} value={state.name} onChange={handleChange} />

      <input
        data-name={'pockemon'}
        value={state.pockemon}
        onChange={handleChange}
      />

      <button onClick={handleCancel}>Cansel</button>
    </form>
  );
};

export default Demo;
