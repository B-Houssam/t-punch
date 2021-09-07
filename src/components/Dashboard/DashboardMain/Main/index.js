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
  BigTitle,
  Wrapper,
  Head,
  Filler,
  InsightContainer,
  //TableWrapper,
  //TweetsContainer,
} from "./MainElements";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import img from "../../../../images/svg-12.svg";
import Skeleton from "react-loading-skeleton";
import { Doughnut, Line, Bar, PolarArea } from "react-chartjs-2";
import Switch from "react-switch";
/*
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
*/

const Main = () => {
  /*
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans"].join(","),
    },
  });
  */

  const [query, setquery] = useState(null);
  const [social, setsocial] = useState(true);
  const [comp, setcomp] = useState(true);
  const [checked, setchecked] = useState(false);
  const [checkedf, setcheckedf] = useState(false);
  const [checkedff, setcheckedff] = useState(false);

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

  const handleSocial = () => {
    setsocial(!social);
  };

  const handleComparatif = () => {
    setcomp(!comp);
  };

  const handleChange = () => {
    setchecked(!checked);
  };

  const handleChangef = () => {
    setcheckedf(!checkedf);
  };

  const handleChangeff = () => {
    setcheckedff(!checkedff);
  };

  const getDay = () => {
    var i = query.days.indexOf(Math.max(...query.days));
    var day;
    switch (i) {
      case 0:
        day = "Monday";
        break;
      case 1:
        day = "Thuesday";
        break;
      case 2:
        day = "Wednesday";
        break;
      case 3:
        day = "Thursday";
        break;
      case 4:
        day = "Friday";
        break;
      case 5:
        day = "Saturday";
        break;
      case 6:
        day = "Sunday";
        break;
      default:
        break;
    }
    return day;
  };

  const getRatio = () => {
    var count = 0;
    query.weeklyratio.forEach((element) => {
      count = count + element;
    });
    if (count < 0) {
      return "Pos/Neg Ratio is negatif";
    } else {
      return "Pos/Neg Ratio is positif";
    }
  };

  const getF = () => {
    if (query.positive_tweets < query.negative_tweets) {
      return "The overall sentiment is negatif";
    } else {
      return "The overall sentiment is positif";
    }
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
          <div
            style={{
              "margin-bottom": "20px",
            }}
          >
            <Skeleton height={130} />
          </div>
          <div>
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
          <BigTitle onClick={handleSocial}>
            <div>
              <div>{"SOCIAL ANALYSIS"}</div>
              <div style={{ "font-size": "18px" }}>
                From {query.dates[0]} TO {query.dates.at(-1)}
              </div>
            </div>
            {social === true ? (
              <BsFillCaretUpFill></BsFillCaretUpFill>
            ) : (
              <BsFillCaretDownFill></BsFillCaretDownFill>
            )}
          </BigTitle>
          <DataContainer display={social}>
            <DoughnutContainer>
              <SubTitle style={{ "margin-bottom": "20px" }}>
                Positif, Negatif and Neutural Distribution
              </SubTitle>
              <Doughnut
                data={{
                  labels: ["Negatif", "Neutral", "Positif"],
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
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  "flex-direction": "row",
                  "justify-content": "space-between",
                }}
              >
                <SubTitle style={{ "margin-bottom": "20px" }}>
                  {checkedf ? "Weekly" : "Daily"} Line of Tweets Sentiment
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
              <Line
                data={{
                  labels: checkedf ? query.weekdates : query.dates,
                  datasets: [
                    {
                      label: "# of positif tweets",
                      data: checkedf ? query.weekpos : query.ratpos,
                      fill: false,
                      backgroundColor: "rgba(54, 162, 235, 1)",
                      borderColor: "rgba(54, 162, 235, 0.2)",
                    },
                    {
                      label: "# of negatif tweets",
                      data: checkedf ? query.weekneg : query.ratneg,
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
          <DataContainer display={social}>
            <DoughnutContainer>
              <SubTitle style={{ "margin-bottom": "20px" }}>
                Tweets per Days of the Week
              </SubTitle>
              <PolarArea
                data={{
                  labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  borderWidth: 1,
                  datasets: [
                    {
                      label: "# of Tweets",
                      data: [
                        query.days[0],
                        query.days[1],
                        query.days[2],
                        query.days[3],
                        query.days[4],
                        query.days[5],
                        query.days[6],
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                        "rgba(255, 206, 86, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(153, 102, 255, 0.5)",
                        "rgba(255, 159, 64, 0.5)",
                        "#CDF352",
                      ],
                    },
                  ],
                }}
              ></PolarArea>
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
                  Tweets per {checked ? "Day" : "Week"}
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
              <Bar
                data={{
                  labels: checked ? query.dates : query.weekdates,
                  datasets: [
                    {
                      label: "# of tweets",
                      data: checked ? query.daily : query.weekly,
                      fill: false,
                      backgroundColor: "rgba(54, 162, 235, 1)",
                      borderColor: "rgba(54, 162, 235, 0.2)",
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
          <DataContainer display={social}>
            <InsightContainer>
              <SubTitle style={{ "margin-bottom": "20px" }}>Insights</SubTitle>

              <Wrapper>
                <BsFillPersonFill
                  size="50px"
                  color="#096192"
                ></BsFillPersonFill>
                <Head>Overall feeling</Head>
                <Filler>{getF()}</Filler>
              </Wrapper>
              <Wrapper>
                <AiOutlineStock size="50px" color="#096192"></AiOutlineStock>
                <Head>Ratio</Head>
                <Filler>{getRatio()}</Filler>
              </Wrapper>
              <Wrapper>
                <FiActivity size="50px" color="#096192"></FiActivity>
                <Head>Busiest day on twitter</Head>
                <Filler>
                  {getDay()} is when people post the most about your search.
                </Filler>
              </Wrapper>
            </InsightContainer>
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
                  {checkedff ? "Weekly" : "Daily"} Positif/Negatif Ratio
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
                  labels: checkedff ? query.weekdates : query.dates,
                  datasets: [
                    {
                      label: "# ratio",
                      data: checkedff ? query.weeklyratio : query.ratio,
                      fill: false,
                      backgroundColor: ["rgba(54, 162, 235, 1)"],
                      borderColor: "rgba(54, 162, 235, 0.2)",
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
          {/*
          <DataContainer display={social}>
            <TweetsContainer>
              <Title style={{ "margin-bottom": "20px" }}>Tweets Sample</Title>
              <ThemeProvider theme={theme}>
                <TableWrapper>
                  <Table aria-label="datasets table">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ "font-weight": "bold" }}>
                          Text:
                        </TableCell>
                        <TableCell style={{ "font-weight": "bold" }}>
                          Number of Likes:
                        </TableCell>
                        <TableCell style={{ "font-weight": "bold" }}>
                          Language:
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ "font-weight": "bold" }}
                        >
                          Post Time:
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {query.sample.map((item) => {
                        return (
                          <TableRow>
                            <TableCell calign="right">{item.t_text}</TableCell>
                            <TableCell align="left">{item.fav_count}</TableCell>
                            <TableCell align="left">{item.lang}</TableCell>
                            <TableCell align="right">
                              {item.post_time}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableWrapper>
              </ThemeProvider>
            </TweetsContainer>
          </DataContainer>
          */}
          <BigTitle onClick={handleComparatif}>
            <div>
              <div>{"COMPARATIF ANALYSIS"}</div>
              <div style={{ "font-size": "18px" }}>
                From {query.dates[0]} TO {query.dates.at(-1)}
              </div>
            </div>
            {comp === true ? (
              <BsFillCaretUpFill></BsFillCaretUpFill>
            ) : (
              <BsFillCaretDownFill></BsFillCaretDownFill>
            )}
          </BigTitle>
        </>
      )}
    </>
  );
};

export default Main;
