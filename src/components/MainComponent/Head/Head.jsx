import React, { useState } from 'react';
import Card from "./Card/Card";
import Form from "./Form/Form";

// img url: https://avatars.githubusercontent.com/u/158491988?s=96&v=4

const Head = () => {
  const [user, setUser] = useState({
      name: "",
      email: "",
      url: "",
      age: ""
    });

  return (
    <div>
      <Form setUser={setUser}/>
      <Card
        name={user.name}
        email={user.email}
        url={user.url}
        age={user.age}/>
    </div>
  );
};

export default Head;
