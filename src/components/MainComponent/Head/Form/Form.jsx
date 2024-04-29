import React, { useRef } from 'react';
import './Form.css'

const Form = ({ setUser }) => {
  const nameValue = useRef();

  const handleSubmit = () => {
    setUser(nameValue.current.value);
  };

  return (
    <div>
      <h3>User Sign-Up</h3>

      <form className="register-form" onSubmit={handleSubmit} >

        <input type="text" ref={nameValue} />

        <button type='submit' onClick={handleSubmit} className="water-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
