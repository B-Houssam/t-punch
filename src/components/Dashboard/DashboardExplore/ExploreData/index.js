import React from "react";
import { useState, useEffect } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";

import {
  SubWrapper,
  ExWrapper,
  ExTxt,
  FirstRow,
  SecondRow,
  DoughnutChart,
  LineChart,
  Title,
  FormInput,
  TitleWrapper,
  FirstCol,
  SecondCol,
  ThirdCol,
  FirstSubCol,
  SecondSubCol,
  CardSubTitleWrapper,
  CardTitle,
  CardIndc,
} from "./ExElements";

import { IoMdArrowDropupCircle } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const AddData = () => {
  const [file, setfile] = useState(null);

  const fetchData = async () => {
    // eslint-disable-next-line
    const res = await fetch("http://localhost:8000/public", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setfile(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  /*
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  
  const handleAction = async (data) => {
    const formData = new FormData();
    formData.append("file", selected);
    const res = await fetch("http://localhost:8000/public", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    if (res.status === true) {
      toast.success("Upload succesful!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Upload failed!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    setfile(false);
    setshow(false);
    fetchData();
  };
  */

  const data = {
    labels: ["EU", "NA", "JP"],
    datasets: [
      {
        label: "# of Millions",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of sales in Millions",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      {file === null ? (
        <ExWrapper>
          <SubWrapper>
            <ExTxt> Click on DATASET to upload a new dataset first!</ExTxt>
          </SubWrapper>
        </ExWrapper>
      ) : (
        <ExWrapper>
          <SecondRow>
            <FirstCol>
              <CardTitle>Average Value Order</CardTitle>
              <CardSubTitleWrapper>
                {"12'589 $"}
                <CardIndc>
                  <IoMdArrowDropupCircle></IoMdArrowDropupCircle>
                  {" 15%"}
                </CardIndc>
              </CardSubTitleWrapper>
              <Bar data={data3} options={options2} />
            </FirstCol>
            <SecondCol>
              <CardTitle>Convertion Rate</CardTitle>
              <CardSubTitleWrapper>
                {"27 %"}
                <CardIndc>
                  <IoMdArrowDropupCircle></IoMdArrowDropupCircle>
                  {" 15%"}
                </CardIndc>
              </CardSubTitleWrapper>
              <Bar data={data3} options={options2} />
            </SecondCol>
            <ThirdCol>
              <FirstSubCol>
                <BsFillPersonFill color="#096192" size="30"></BsFillPersonFill>
                <CardTitle style={{ "padding-top": "10px" }}>50325</CardTitle>
                <CardTitle style={{ opacity: "0.5" }}>Visitors</CardTitle>
                <CardIndc>
                  <IoMdArrowDropupCircle></IoMdArrowDropupCircle>
                  {" 15%"}
                </CardIndc>
              </FirstSubCol>
              <SecondSubCol>
                <AiFillDollarCircle
                  color="#096192"
                  size="30"
                ></AiFillDollarCircle>
                <CardTitle style={{ "padding-top": "10px" }}>98.2k $</CardTitle>
                <CardTitle style={{ opacity: "0.5" }}>Sales</CardTitle>
                <CardIndc>
                  <IoMdArrowDropupCircle></IoMdArrowDropupCircle>
                  {" 20%"}
                </CardIndc>
              </SecondSubCol>
            </ThirdCol>
          </SecondRow>
          <FirstRow>
            <LineChart>
              <CardTitle>Daily Line Chart</CardTitle>
              <Line data={data2} options={options} />
            </LineChart>
            <DoughnutChart>
              <TitleWrapper>
                <CardTitle>Status</CardTitle>
                <FormInput type="text" placeholder="Publisher"></FormInput>
              </TitleWrapper>
              <Doughnut data={data}></Doughnut>
            </DoughnutChart>
          </FirstRow>
        </ExWrapper>
      )}
    </>
  );
};

export default AddData;
