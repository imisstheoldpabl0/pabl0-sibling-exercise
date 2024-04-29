import React, { useRef } from 'react';
import './Form.css'

const Form = ({ setUser }) => {
  const nameValue = useRef();
  const emailValue = useRef();
  const urlValue = useRef();
  const ageValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(
      {
        name: nameValue.current.value,
        email: emailValue.current.value,
        url: urlValue.current.value,
        age: ageValue.current.value
      });
  };
    
  return (
    <div>
      <h3>User Sign-Up</h3>

      <form className="register-form" onSubmit={handleSubmit} >

        <label htmlFor="name">Name:
          <input type="text" ref={nameValue} required/>
        </label>

        <label htmlFor='email'>Email:
          <input type="email" ref={emailValue} required/>
        </label>

        <label htmlFor='url'>Image URL:
          <input type="text" ref={urlValue} required/>
        </label>

        <label htmlFor='age'>Age:
          <input type="number" ref={ageValue} required/>
        </label>

        <button type='submit' onClick={handleSubmit} className="water-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
