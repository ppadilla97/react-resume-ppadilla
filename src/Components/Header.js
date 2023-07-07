import React, { Component } from 'react';
import LanguagePopup from './LanguagePopup';


class Header extends Component {

   handleClickOption = () => {
      this.props.onMenuOptionClick();
      // Lógica adicional para la opción del menú
    };

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home" style={{ }}>

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current" onClick={this.handleClickOption}><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about" onClick={this.handleClickOption}>About</a></li>
	         <li><a className="smoothscroll" href="#resume" onClick={this.handleClickOption}>Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio" onClick={this.handleClickOption}>Works</a></li>
            <li><a className="smoothscroll" href="#testimonials" onClick={this.handleClickOption}>Testimonials</a></li>
            <li><LanguagePopup objectRef={this.props.objectRef} /></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               <li>
                  {networks}
               </li>

            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }

   }

export default Header;
