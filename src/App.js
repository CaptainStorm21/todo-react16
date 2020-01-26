import React, { Component } from "react";
import "./App.css";

// import Content from './Content/Content';
import Footer from "./Shared/Footer/Footer";
import Heading from "./Shared/Heading/Heading";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Heading />
        </header>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
