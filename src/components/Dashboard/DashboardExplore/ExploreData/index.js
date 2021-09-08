import React from "react";
import { useState, useEffect } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";

import {
  SubTitle,
  DoughnutContainer,
  LineContainer,
  DataContainer,
} from "./ExElements";

import Switch from "react-switch";
import Skeleton from "react-loading-skeleton";

const AddData = () => {
  //const [file, setfile] = useState(null);
  const [query, setquery] = useState(null);
  const [checked, setchecked] = useState(false);
  const [checkedf, setcheckedf] = useState(false);
  const [checkedff, setcheckedff] = useState(false);

  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:8000/public", {
      method: "GET",
    }).then((res) => res.json());
    //.then((res) => setfile(res));

    //eslint-disable-next-line
    const tes = await fetch("http://localhost:3002/getclient", {
      method: "GET",
    })
      .then((tes) => tes.json())
      .then((tes) => setquery(tes));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = () => {
    setchecked(!checked);
  };

  const handleChangef = () => {
    setcheckedf(!checkedf);
  };

  const handleChangeff = () => {
    setcheckedff(!checkedff);
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <>
      {query === null ? (
        <div
          style={{
            padding: "100px",
          }}
        >
          <div
            style={{
              "margin-bottom": "20px",
            }}
          >
            <div
              style={{
                "font-family": "Oswald,sans-serif",
                "font-size": "72px",
                "font-weight": "bold",
                color: "#EEEEEE",
              }}
            >
              LOADING
            </div>
            <Skeleton height={180} />
          </div>
          <div
            style={{
              "margin-bottom": "20px",
            }}
          >
            <Skeleton height={40} />
          </div>
          <div
            style={{
              "margin-bottom": "20px",
            }}
          >
            <Skeleton height={40} />
          </div>
          <div
            style={{
              "margin-bottom": "20px",
            }}
          >
            <Skeleton height={40} />
          </div>
          <div
            style={{
              "margin-bottom": "20px",
            }}
          >
            <Skeleton height={100} />
          </div>
        </div>
      ) : (
        <>
          <DataContainer>
            <LineContainer>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  "flex-direction": "row",
                  "justify-content": "space-between",
                }}
              >
                <SubTitle style={{ "margin-bottom": "20px" }}>
                  {checked ? "Weekly" : "Daily"} Line of Sales
                </SubTitle>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  onColor="#86d3ff"
                  onHandleColor="#096192"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                />
              </div>
              <Line
                data={{
                  labels: checked ? query.weeks : query.days,
                  datasets: [
                    {
                      label: "# Sales in $",
                      data: checked ? query.wsales : query.sales,
                      fill: false,
                      backgroundColor: "#86d3ff",
                      borderColor: "#86d3ff",
                    },
                  ],
                }}
                options={{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                }}
              />
            </LineContainer>
            <LineContainer>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  "flex-direction": "row",
                  "justify-content": "space-between",
                }}
              >
                <SubTitle style={{ "margin-bottom": "20px" }}>
                  {checkedf ? "Weekly" : "Daily"} Line of Imported Reviews
                </SubTitle>
                <Switch
                  checked={checkedf}
                  onChange={handleChangef}
                  onColor="#86d3ff"
                  onHandleColor="#096192"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                />
              </div>
              <Bar
                data={{
                  labels: checkedf ? query.weeks : query.days,
                  datasets: [
                    {
                      label: "# positif review",
                      data: checkedf ? query.wpos : query.pos,
                      fill: false,
                      backgroundColor: "rgba(54, 162, 235, 1)",
                      borderColor: "rgba(54, 162, 235, 0.2)",
                    },
                    {
                      label: "# negatif review",
                      data: checkedf ? query.wneg : query.neg,
                      fill: false,
                      backgroundColor: "rgba(255, 99, 132, 1)",
                      borderColor: "rgba(255, 99, 132, 0.2)",
                    },
                  ],
                }}
                options={{
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                }}
              />
            </LineContainer>
          </DataContainer>
          <DataContainer>
            <DoughnutContainer>
              <SubTitle style={{ "margin-bottom": "20px" }}>
                Reviews's Positif and Negatif Distribution
              </SubTitle>
              <Doughnut
                data={{
                  labels: ["Negatif", "Positif"],
                  datasets: [
                    {
                      label: "# of Tweets",
                      data: [query.dailyneg, query.dailypos],
                      backgroundColor: ["rgba(255, 99, 132, 0.2)", "#CDF3A2"],
                      borderColor: ["rgba(255, 99, 132, 1)", "#57837B"],
                      borderWidth: 1,
                    },
                  ],
                }}
              ></Doughnut>
            </DoughnutContainer>
            <LineContainer>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  "flex-direction": "row",
                  "justify-content": "space-between",
                }}
              >
                <SubTitle style={{ "margin-bottom": "20px" }}>
                  {checkedff ? "Daily" : "Weekly"} Sales by Imported Reviews
                </SubTitle>
                <Switch
                  checked={checkedff}
                  onChange={handleChangeff}
                  onColor="#86d3ff"
                  onHandleColor="#096192"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                />
              </div>
              <Bar
                data={{
                  labels: checkedff ? query.days : query.weeks,
                  datasets: [
                    {
                      type: "line",
                      label: "# sales in $",
                      data: checkedff ? query.sales : query.wsales,
                      fill: false,
                      backgroundColor: "#86d3ff",
                      borderColor: "#86d3ff",
                      yAxisID: "y-axis-2",
                    },
                    {
                      type: "bar",
                      label: "# positif review",
                      data: checkedff ? query.pos : query.wpos,
                      fill: false,
                      backgroundColor: "rgb(54, 162, 235)",
                      borderWidth: 2,
                      yAxisID: "y-axis-1",
                    },
                    {
                      type: "bar",
                      label: "# negatif review",
                      data: checkedff ? query.neg : query.wneg,
                      fill: false,
                      backgroundColor: "rgb(255, 99, 132)",
                      borderWidth: 2,
                      yAxisID: "y-axis-1",
                    },
                  ],
                }}
                options={options}
              />
            </LineContainer>
          </DataContainer>
        </>
      )}
    </>
  );
};

export default AddData;
