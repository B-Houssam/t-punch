import React, { useState } from "react";
import { Container, Wrapper, Text, Btn, ResetBtn } from "./NewAElements.js";
import Select from "react-select";
import { Redirect } from "react-router-dom";

const options = [
  { value: "company", label: "Company" },
  { value: "smartphones", label: "Smartphones" },
  { value: "laptops", label: "Laptops" },
];

const smartphones = [
  { value: "Infinix Note 7", label: "Infinix Note 7" },
  { value: "LEGION DUEL", label: "LEGION DUEL" },
  { value: "LG V60 ThinQ", label: "LG V60 ThinQ" },
  { value: "LG Velvet", label: "LG Velvet" },
  { value: "LG Wing", label: "LG Wing" },
  { value: "Micromax IN Note 1", label: "Micromax IN Note 1" },
  { value: "Moto E (2020)", label: "Moto E (2020)" },
  { value: "Moto E7", label: "Moto E7" },
  { value: "Moto G (2020)", label: "Moto G (2020)" },
  { value: "Moto G 5G Plus", label: "Moto G 5G Plus" },
  { value: "Moto G 5G", label: "Moto G 5G" },
  { value: "Moto G9", label: "Moto G9" },
  { value: "Motorola Edge+", label: "Motorola Edge+" },
  { value: "Motorola Edge", label: "Motorola Edge" },
  { value: "Motorola Razr (5G)", label: "Motorola Razr (5G)" },
  { value: "OnePlus 8", label: "OnePlus 8" },
  { value: "OnePlus 8T", label: "OnePlus 8T" },
  { value: "OnePlus Nord N10", label: "OnePlus Nord N10" },
  { value: "OnePlus Nord N100", label: "OnePlus Nord N100" },
  { value: "OnePlus Nord", label: "OnePlus Nord" },
  {
    value: "SAMSUNG GALAXY Note 20 ultra",
    label: "SAMSUNG GALAXY Note 20 ultra",
  },
  { value: "SAMSUNG GALAXY Note 20", label: "SAMSUNG GALAXY Note 20" },
  { value: "SAMSUNG GALAXY Note", label: "SAMSUNG GALAXY Note" },
  { value: "SAMSUNG GALAXY S20", label: "SAMSUNG GALAXY S20" },
  { value: "iPhone 12 Pro", label: "iPhone 12 Pro" },
  { value: "iPhone 12", label: "iPhone 12" },
  { value: "iPhone SE (2nd generation)", label: "iPhone SE (2nd generation)" },
];
const companies = [
  { value: "ACER", label: "ACER" },
  { value: "AMD", label: "AMD" },
  { value: "ASUS", label: "ASUS" },
  { value: "CORSAIR", label: "CORSAIR" },
  { value: "DELL", label: "DELL" },
  { value: "GIGABYTE", label: "GIGABYTE" },
  { value: "GSKILL", label: "GSKILL" },
  { value: "HUAWEI", label: "HUAWEI" },
  { value: "INTEL", label: "INTEL" },
  { value: "NVIDIA", label: "SAMSUNG" },
  { value: "NZXT", label: "NZXT" },
  { value: "RADEON", label: "RADEON" },
  { value: "RAZOR", label: "RAZOR" },
  { value: "SAMSUNG", label: "SAMSUNG" },
  { value: "SONY", label: "SONY" },
  { value: "THERMALTAKE", label: "THERMALTAKE" },
  { value: "XIOAMI", label: "XIOAMI" },
];
const laptops = [
  { value: "Acer Chromebook 314", label: "Acer Chromebook 314" },
  { value: "Acer Chromebook 714", label: "Acer Chromebook 714" },
  { value: "Acer Chromebook Spin 311", label: "Acer Chromebook Spin 311" },
  { value: "Acer ConceptD 7", label: "Acer ConceptD 7" },
  { value: "Acer Predator Helios 700", label: "Acer Predator Helios 700" },
  { value: "Acer Predator Triton 500", label: "Acer Predator Triton 500" },
  { value: "Acer Spin 5", label: "Acer Spin 5" },
  { value: "Acer Swift 3", label: "Acer Swift 3" },
  { value: "Acer Swift 3x", label: "Acer Swift 3x" },
  { value: "Asus ROG Zephyrus G14", label: "Asus ROG Zephyrus G14" },
  { value: "DELL XPS 13", label: "DELL XPS 13" },
  { value: "DELL XPS 15", label: "DELL XPS 15" },
  { value: "Gigabyte Aero 15", label: "Gigabyte Aero 15" },
  { value: "HP Spectre x360 14", label: "HP Spectre x360 14" },
  { value: "MACBOOK AIR", label: "MACBOOK AIR" },
  { value: "MACBOOK PRO", label: "MACBOOK PRO" },
  { value: "Razer Blade Pro 17", label: "Razer Blade Pro 17" },
  { value: "Razer Book 13", label: "Razer Book 13" },
  { value: "TUF A15", label: "TUF A15" },
  { value: "TUF Gaming", label: "TUF Gaming" },
  { value: "VivoBook Gaming ", label: "VivoBook Gaming " },
];

const NewA = () => {
  const [changeone, setchangeone] = useState(null);
  const [changeTwo, setchangeTwo] = useState(null);
  //const [checked, setchecked] = useState(true);
  const [redi, setredi] = useState(false);

  const handleChange = (e) => {
    setchangeone(e.value);
  };
  const handleChangeTwo = (e) => {
    setchangeTwo(e.value);
  };
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3002/newanal", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: changeTwo,
        //save: checked,
      }),
    }).then((res) => res.json());

    if (res.status === true) {
      setredi(true);
    } else {
      console.log("something's wrong");
    }
  };
  const handleReset = () => {
    setchangeTwo(null);
    setchangeone(null);
  };

  if (redi) {
    return <Redirect to="/main" />;
  }

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
            {/*
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
            */}
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
