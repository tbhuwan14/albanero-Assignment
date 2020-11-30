import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CardList(props) {
  let { name, id, value } = props.card;
  return (
    <div className="card">
      <h3>name:{name}</h3>
      <h3>id:{id}</h3>
      <h3>value:{value}</h3>
    </div>
  );
}

export default CardList;
