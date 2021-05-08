import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [fullName, setfullName] = useState({
    fname: '',
    lname: '',
  });

  const InputEvent = event => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setfullName(prepValue => {
      // console.log(prepValue);
      if (name === "fName") {
        return {
          fname: value,
          lname: prepValue.lname,
          email:prepValue.email,
          phone:prepValue.phone
        };
      }
      else
        if (name === "lName") {
        return {
          fname: prepValue.fname,
          lname: value,
          email:prepValue.email,
          phone:prepValue.phone
        };
      

      }
      else
        if (name === "email") {
        return {
          fname: prepValue.fname,
          lname: prepValue.lname,
          email:value,
          phone:prepValue.phone
        };
      

      }
      else
        if (name === "phone") {
        return {
          fname: prepValue.fname,
          lname: prepValue.lname,
          email:prepValue.email,
          phone:value
        };
      

      }
    });
  };

  const onSubmits = event => {
    event.preventDefault();
    alert('form submitted');
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName.fname} 
            {fullName.lname}
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
          </h1>
          <input
            type="text"
            placeholder="Enter your Name"
            name="fName"
            onChange={InputEvent}
            value={fullName.fname}
          />
          <br />
          <br/>
          <input
            type="text"
            placeholder="Enter your lname"
            name="lName"
            onChange={InputEvent}
            value={fullName.lname}
          />

          <br />
          <br/>
          <input
            type="number"
            placeholder="Enter your phone"
            name="phone"
            onChange={InputEvent}
            value={fullName.phone}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={InputEvent}
            value={fullName.email}
          />
          <button type="submit"> Submit me </button>
        </form>
      </div>
    </>
  );
};
export default App;
