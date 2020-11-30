import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form(props) {
  let { dataArr, setDataArr, data } = props;
  function handleClick(event) {
    event.preventDefault();
    let newDataArr = dataArr.filter((el) => el.id !== data.id);
    setDataArr(newDataArr);
  }
  return (
    <form onSubmit={handleClick}>
      <input type="text" placeholder="Name" readOnly value={data.name} />
      <input type="text" placeholder="Value" readOnly value={data.value} />
      <button className="btn btn-primary d-inline">X</button>
    </form>
  );
}
