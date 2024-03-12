import React, { useState } from "react";
import Prop from "./dependencies/Prop.js";
import Form from "./dependencies/Form.js";

export default function App(param) {
  const [stuff, changeStuff] = useState([]);
  const handleReturn = (returnStuff) => {
    changeStuff([...stuff, returnStuff]);
  };
  
  return (
    <div>
      <Form return={handleReturn} />
      <Prop prop={stuff} />
    </div>
  );
}
