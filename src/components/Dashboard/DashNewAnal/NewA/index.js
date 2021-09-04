import React, { useState } from "react";
import { Container, Wrapper, Text, Btn, ResetBtn } from "./NewAElements.js";
import Select from "react-select";

const options = [
  { value: "company", label: "Company" },
  { value: "smartphones", label: "Smartphones" },
  { value: "laptops", label: "Laptops" },
];
const smartphones = [{ value: "iphone12", label: "Iphone 12" }];
const companies = [{ value: "samsung", label: "Samsung" }];
const laptops = [{ value: "dellinspiron", label: "Dell Inspiron" }];

const NewA = () => {
  const [changeone, setchangeone] = useState(null);
  const [changeTwo, setchangeTwo] = useState(null);
  const [checked, setchecked] = useState(true);

  const handleChange = (e) => {
    setchangeone(e.value);
  };
  const handleChangeTwo = (e) => {
    setchangeTwo(e.value);
  };
  const handleSubmit = () => {
    /*
    console.log(changeone);
    console.log(changeTwo);
    */
  };
  const handleReset = () => {
    setchangeTwo(null);
    setchangeone(null);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Text>What are you looking for ?</Text>
          <div style={{ width: "100%", "margin-bottom": "20px" }}>
            <Select
              //value={changeone}
              options={options}
              onChange={handleChange}
            ></Select>
          </div>

          <div
            style={{
              width: "100%",
              "margin-bottom": "20px",
              display: changeone === null ? "none" : "block",
            }}
          >
            <Select
              //value={changeTwo}
              options={(() => {
                if (changeone === "company") {
                  return companies;
                } else {
                  if (changeone === "smartphones") {
                    return smartphones;
                  } else {
                    return laptops;
                  }
                }
              })()}
              onChange={handleChangeTwo}
            ></Select>
          </div>

          <div
            style={{
              //width: "100%",
              display: "flex",
              "justify-content": "flex-end",
              color: "grey",
            }}
          >
            <label>
              <input
                style={{ margin: "0px 5px 0px 5px " }}
                type="checkbox"
                checked={checked}
                onChange={() => {
                  setchecked(!checked);
                }}
              />
              Save in history
            </label>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              "justify-content": "flex-end",
            }}
          >
            <ResetBtn
              onClick={handleReset}
              disabled={changeone === null ? false : true}
            >
              Reset
            </ResetBtn>
            <Btn
              onClick={handleSubmit}
              disabled={changeTwo === null ? false : true}
            >
              Submit
            </Btn>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default NewA;
