import React, { useState } from 'react';
import Card from "./Card/Card";
import Form from "./Form/Form";

const Head = () => {
  const [user, setUser] = useState('');

  return (
    <div>
      <h1>This is the head</h1>
      <Form setUser={setUser}/>
      <Card user={user}/>
    </div>
  );
};

export default Head;
