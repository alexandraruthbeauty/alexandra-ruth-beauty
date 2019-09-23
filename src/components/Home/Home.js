import React, { Component } from "react";

import Calendar from "../Calendar/Calendar";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      dumbData: [
        { num: "1" },
        { num: "2" },
        { num: "3" },
        { num: "4" },
        { num: "5" }
      ],
      showAmt: 3
    };
  }

  render() {
    const arrToMap = [...this.state.dumbData];
    const mappedNums = arrToMap
      .slice(0, this.state.showAmt)
      .map((numObj, i) => {
        return <Calendar key={i} num={numObj.num} />;
      });
    return (
      <div className="App">
        <header className="App-header">
          Home
          {mappedNums}
        </header>
      </div>
    );
  }
}

export default Home;
