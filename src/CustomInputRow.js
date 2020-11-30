import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList";

export default function CustomInputRow() {
  let [name, setName] = useState("");
  let [value, setValue] = useState("");
  let [dataArr, setDataArr] = useState([]);
  let [cardArr, setCardArr] = useState(dataArr);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeValue(event) {
    setValue(event.target.value);
  }

  function handleAddRow() {
    let newDataArr = [...dataArr];
    if (name.length > 0 && value.length > 0) {
      newDataArr.push({
        id: Math.round(Math.random() * 100000000),
        name,
        value
      });
      setDataArr(newDataArr);
      setName("");
      setValue("");
    }
  }

  function handleCardclick() {
    let newCardArr = [...dataArr];
    setCardArr(newCardArr);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={handleChangeValue}
      />
      {dataArr.map((el) => (
        <Form key={el.id} data={el} dataArr={dataArr} setDataArr={setDataArr} />
      ))}
      <button className="btn btn-primary d-block" onClick={handleAddRow}>
        Add Row
      </button>
      <button onClick={handleCardclick} className="btn btn-primary d-block">
        CreateCard
      </button>
      <div className="container">
        {cardArr.map((el) => (
          <CardList key={el.id} card={el} />
        ))}
      </div>
    </>
  );
}
