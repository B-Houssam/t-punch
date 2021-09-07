import React, { useState, useEffect } from "react";
import {
  Title,
  LeftContainer,
  MainText,
  SubTitle,
  OverviewContainer,
  RightContainer,
  AddBtn,
  DoughnutContainer,
  DataContainer,
  LineContainer,
} from "./MainElements";
import img from "../../../../images/svg-12.svg";
import Skeleton from "react-loading-skeleton";
import { Doughnut, Line, Bar } from "react-chartjs-2";

const Main = () => {
  const [query, setquery] = useState(null);
  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3002/getquery", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setquery(res));
  };
  useEffect(() => {
    fetchData();
  }, []);

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
            <Skeleton height={200} />
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
        </div>
      ) : (
        <>
          <OverviewContainer>
            <RightContainer>
              <Title>{query.query.query}</Title>
              <SubTitle>Explore these tweets with our tool.</SubTitle>
              <MainText>
                More than {query.query.total_tweets} analysed tweets.
              </MainText>
              <AddBtn to="/newanalysis">Add new analysis</AddBtn>
            </RightContainer>
            <LeftContainer src={img}></LeftContainer>
          </OverviewContainer>
          <DataContainer>
            <DoughnutContainer>
              <Title>Number of Pos. and Neg. and Neut. Tweets</Title>
              <Doughnut
                data={{
                  labels: ["Négatif", "Neutre", "Positif"],
                  datasets: [
                    {
                      label: "# of Tweets",
                      data: [
                        query.query.negative_tweets,
                        query.query.neutral_tweets,
                        query.query.positive_tweets,
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "#CDF3A2",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "#57837B",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              ></Doughnut>
            </DoughnutContainer>
            <LineContainer>
              <Line
                data={{
                  labels: query.dates,
                  datasets: [
                    {
                      label: "# of positif tweets",
                      data: query.ratpos,
                      fill: false,
                      backgroundColor: "rgba(54, 162, 235, 1)",
                      borderColor: "rgba(54, 162, 235, 0.2)",
                    },
                    {
                      label: "# of negatif tweets",
                      data: query.ratneg,
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
        </>
      )}
    </>
  );
};

export default Main;
