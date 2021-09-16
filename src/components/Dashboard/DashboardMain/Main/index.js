import React, { useState, useEffect, useRef } from "react";
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
  PrintBtn,
} from "./MainElements";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { BiCalendarAlt } from "react-icons/bi";
import { AiOutlineFilePdf } from "react-icons/ai";
import img from "../../../../images/svg-12.svg";
import Skeleton from "react-loading-skeleton";
import { Doughnut, Line, Bar, PolarArea } from "react-chartjs-2";
import Switch from "react-switch";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const componentRef = useRef();
  const [file, setfile] = useState(null);
  const [query, setquery] = useState(null);
  const [social, setsocial] = useState(true);
  const [comp, setcomp] = useState(true);
  const [checked, setchecked] = useState(false);
  const [checkedf, setcheckedf] = useState(false);
  const [checkedff, setcheckedff] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked1, setchecked1] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:3002/getquery", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setquery(res));

    // eslint-disable-next-line
    const tes = await fetch("http://localhost:8000/public", {
      method: "GET",
    })
      .then((tes) => tes.json())
      .then((tes) => setfile(tes));
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

  const handleChange2 = () => {
    setchecked2(!checked2);
  };

  const handleChange1 = () => {
    setchecked1(!checked1);
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

  const getDate = () => {
    var i = query.daily.indexOf(Math.max(...query.daily));
    return query.dates.at(i);
  };

  const getF = () => {
    if (query.positive_tweets < query.negative_tweets) {
      return "negatif";
    } else {
      return "positif";
    }
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
    <div ref={componentRef}>
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
          <OverviewContainer>
            <RightContainer>
              <Title>{query.query.query}</Title>
              <SubTitle>Explore these tweets with our tool.</SubTitle>
              <MainText>
                More than {query.query.total_tweets} analysed tweets.
              </MainText>
              <div style={{ display: "flex", "flex-direction": "row" }}>
                <AddBtn to="/newanalysis">Add new analysis</AddBtn>
                <PrintBtn onClick={handlePrint}>
                  <AiOutlineFilePdf
                    size="25px"
                    color="#096192"
                  ></AiOutlineFilePdf>
                </PrintBtn>
              </div>
            </RightContainer>
            <LeftContainer src={img}></LeftContainer>
          </OverviewContainer>
          <BigTitle onClick={handleSocial}>
            <div>
              <div>{"SOCIAL ANALYSIS"}</div>
              <div style={{ "font-size": "18px" }}>
                From {query.dates.at(0)} TO {query.dates.at(-1)}
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
                {query.query.query} Positif, Negatif and Neutural Tweets
                Distribution
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
                  {query.query.query} {checkedf ? "Weekly" : "Daily"} Line of
                  Tweets Sentiment
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
                {query.query.query} Tweets per Days of the Week
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
                  {query.query.query} Tweets per {checked ? "Week" : "Day"}
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
                  labels: checked ? query.weekdates : query.dates,
                  datasets: [
                    {
                      label: "# of tweets",
                      data: checked ? query.weekly : query.daily,
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
              <SubTitle style={{ "margin-bottom": "20px" }}>
                {query.query.query} Social Insights
              </SubTitle>

              <Wrapper>
                <BsFillPersonFill
                  size="50px"
                  color="#096192"
                ></BsFillPersonFill>
                <Head>Overall feeling</Head>
                <Filler>
                  The overall sentiment about {query.query.query} is {getF()}
                </Filler>
              </Wrapper>
              <Wrapper>
                <BiCalendarAlt size="50px" color="#096192"></BiCalendarAlt>
                <Head>Mark The Date</Head>
                <Filler>
                  {getDate()} is whene people talked the most about{" "}
                  {query.query.query}
                </Filler>
              </Wrapper>
              <Wrapper>
                <FiActivity size="50px" color="#096192"></FiActivity>
                <Head>Busiest day of the week on twitter</Head>
                <Filler>
                  {getDay()} is when people post the most about{" "}
                  {query.query.query}.
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
                  {query.query.query} {checkedff ? "Weekly" : "Daily"}{" "}
                  Positif/Negatif Ratio
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
              <Line
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
          {file === null ? (
            <>
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
                      color: "grey",
                    }}
                  >
                    OOPS! ... NO INTERNAL DATA TO USE
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <DataContainer display={comp}>
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
                      {checked1 ? "Weekly" : "Daily"} Client's Sales by{" "}
                      {query.query.query} Tweets Sentiment
                    </SubTitle>
                    <Switch
                      checked={checked1}
                      onChange={handleChange1}
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
                      labels: checked1 ? query.weekdates : query.dates,
                      datasets: [
                        {
                          type: "line",
                          label: "# sales in $",
                          data: checked1 ? query.wsales : query.sales,
                          fill: false,
                          backgroundColor: "#34f",
                          borderColor: "#FFB344",
                          yAxisID: "y-axis-1",
                        },
                        {
                          type: "bar",
                          label: "# of positif tweets",
                          data: checked1 ? query.weekpos : query.ratpos,
                          fill: false,
                          backgroundColor: "rgba(54, 162, 235, 1)",
                          yAxisID: "y-axis-2",
                        },
                        {
                          type: "bar",
                          label: "# of negatif tweets",
                          data: checked1 ? query.weekneg : query.ratneg,
                          fill: false,
                          backgroundColor: "rgba(255, 99, 132, 1)",
                          yAxisID: "y-axis-2",
                        },
                      ],
                    }}
                    options={options}
                  />
                </LineContainer>
              </DataContainer>
              <DataContainer display={comp}>
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
                      {checked2 ? "Weekly" : "Daily"} Client's Reviews VS{" "}
                      {query.query.query} Tweets Sentiment
                    </SubTitle>
                    <Switch
                      checked={checked2}
                      onChange={handleChange2}
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
                      labels: checked2 ? query.weekdates : query.dates,
                      datasets: [
                        {
                          label: "# of positif tweets",
                          data: checked2 ? query.weekpos : query.ratpos,
                          fill: false,
                          backgroundColor: "rgba(54, 162, 235, 1)",
                        },
                        {
                          label: "# of negatif tweets",
                          data: checked2 ? query.weekneg : query.ratneg,
                          fill: false,
                          backgroundColor: "rgba(255, 99, 132, 1)",
                        },
                        {
                          label: "# of positif reviews",
                          data: checked2 ? query.wpos : query.pos,
                          fill: false,
                          backgroundColor: "rgba(54, 162, 235, 0.2)",
                          borderColor: "rgba(54, 162, 235, 1)",
                        },
                        {
                          label: "# of negatif reviews",
                          data: checked2 ? query.wneg : query.neg,
                          fill: false,
                          backgroundColor: "rgba(255, 99, 132, 0.2)",
                          borderColor: "rgba(255, 99, 132, 1)",
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
      )}
    </div>
  );
};

export default Main;
