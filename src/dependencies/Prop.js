import React, { useEffect, useState } from "react";

export default function Prop(params) {
  const [prop, changeProp] = useState("");
  //eslint-disable-next-line
  useEffect(() => {
    changeProp(
      params.prop.length > 0 &&
        params.prop.map((value) => <h1>Hello {value}</h1>)
    );
  });
  return <>{prop}</>;
}
