import React from "react";
import styled from "styled-components";
import { Liquidswipe } from "react-liquidswipe";
import randomColor from "randomcolor";
import { BrowserRouter as Router } from "react-router-dom";

import Homepage from "./components/Pages/Home Page/Homepage";
import Plans from "./components/Pages/Plans";
import Navbar from "./components/Navbar";
import { NikeCard } from "./components/nikeCard";
import { AccountBox } from "./components/accountBox";
import Footer from "./components/Footer";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MAX = 1;

const data = [
  {
    smalltext: "plan -1",
    mediumtext: "wasd",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
];
const data2 = [
  {
    smalltext: "plan -1",
    mediumtext: "wasd",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
  {
    smalltext: "plan -2",
    mediumtext: "defg",
    price: "Rs 5000",
  },
];

function App() {
  <Navbar />;
  let components = [];
  for (var i = 1; i <= MAX; i++) {
    components.push(
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "100vw",
            margintop: "100px",
            background: "#5E6600",
          }}
        >
          <Homepage />
        </div>
      </>,
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "100vw",
            margintop: "100px",
            background: "#233000",
          }}
        >
          <AppContainer>
            {data.map((value, index) => (
              <NikeCard {...value} />
            ))}
          </AppContainer>
        </div>
      </>,
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "100vw",
            margintop: "100px",
            background: "#4D4D4D",
          }}
        >
          <AppContainer>
            {data2.map((value, index) => (
              <NikeCard {...value} />
            ))}
          </AppContainer>
        </div>
      </>,
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "100vw",
            margintop: "100px",
            background: "#233000",
          }}
        >
          <AppContainer>
            <AccountBox />
          </AppContainer>
        </div>
      </>,
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "100vw",
            margintop: "100px",
            background: "#5E6600",
          }}
        >
          <AppContainer>
            <Form1 />
          </AppContainer>
        </div>
      </>,
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            width: "100vw",
            margintop: "100px",
            background: "#233000",
          }}
        >
          <AppContainer>
            <Form2 />
          </AppContainer>
        </div>
      </>
    );
  }
  return (
    <>
      <Router>
        <Navbar />
        <Liquidswipe components={components} />;
      </Router>
    </>
  );
}

export default App;
