import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import LanguagePopup from "./Components/LanguagePopup";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
    this.objectRef = React.createRef()
    this.shouldPropagateClick = true;

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }
  
  handleClickOutside = (event) => {  
    console.log(this.shouldPropagateClick) 
    if (!this.shouldPropagateClick && this.objectRef.current) {
      // Lógica para ocultar el objeto
      //console.log("Esconder objeto");
      //this.objectRef.current.style.visibility = 'hidden'; // Llamada a una función en el componente padre
    }
  };

  getResumeData() {
    axios.get(process.env.REACT_APP_DATA_URL || "/resumeData.json").then(res=> this.setState({ resumeData: res.data })).catch(err => alert(err))
  }

  componentDidMount() {
    this.getResumeData();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} objectRef={this.objectRef} onMenuOptionClick={() => (this.shouldPropagateClick = false)}/>
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
}

export default App;
