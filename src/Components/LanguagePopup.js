import React, { Component } from 'react';
import "../languagePopup.css";

class LanguagePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      selectedLanguage: 'es',
      svgColor: 'currentColor'
    };
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
      svgColor: 'currentColor'
    }));
  };

  changeLanguage = (language) => {
    this.setState({ selectedLanguage: language });
    // Aquí puedes agregar la lógica para cambiar el idioma en tu aplicación
    console.log("Idioma cambiado!!");
  };

  showText(id) {
    if (id === 'en') {
      document.getElementById('button-text-En').classList.remove('hidden');
      document.getElementById('button-text-En').classList.add('visible');
    } else if (id === 'es') {
      document.getElementById('button-text-Esp').classList.remove('hidden');
      document.getElementById('button-text-Esp').classList.add('visible');
    } else {
      document.getElementById('button-text-Cat').classList.remove('hidden');
      document.getElementById('button-text-Cat').classList.add('visible');
    }
  }

  hideText(id) {
    if (id === 'en') {
      document.getElementById('button-text-En').classList.remove('visible');
      document.getElementById('button-text-En').classList.add('hidden');
    } else if (id === 'es') {
      document.getElementById('button-text-Esp').classList.remove('visible');
      document.getElementById('button-text-Esp').classList.add('hidden');
    } else {
      document.getElementById('button-text-Cat').classList.remove('visible');
      document.getElementById('button-text-Cat').classList.add('hidden');
    }
  }
  
  handleMouseOver = () => {
    this.setState({ svgColor: 'red' });
  };

  handleMouseOut = () => {
    this.setState({ svgColor: 'currentColor' });
  };

  render() {
    const { showPopup } = this.state;

    return (
      <div className='divPopup'>
        <a style={{ cursor: 'pointer' }} onClick={this.togglePopup}>
          Change Language
        </a>
        {showPopup && (
          <div className="popup" ref={this.props.objectRef}>
            <div className='comic-bubble'>
              <div className="divPopupTittle">
                <p className="optionsText">Select a Language</p>
                <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={this.togglePopup} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                  <path  fill={this.state.svgColor} d="M13.4 12l5.3-5.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6l-5.3-5.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L10.6 12l-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L12 13.4l5.3 5.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z" />
                </svg>
              </div>
              <div className="buttonsList">
                <button
                  className="buttonLanguageEsp"
                  onClick={() => this.changeLanguage('es')}
                  onMouseOver={() => this.showText('es')}
                  onMouseOut={() => this.hideText('es')}
                >
                  <span id="button-text-Esp" className="hidden">Español</span>
                </button>
                <button
                  className="buttonLanguageEn"
                  onClick={() => this.changeLanguage('en')}
                  onMouseOver={() => this.showText('en')}
                  onMouseOut={() => this.hideText('en')}
                >
                  <span id="button-text-En" className="hidden">English</span>
                </button>
                <button
                  className="buttonLanguageCat"
                  onClick={() => this.changeLanguage('cat')}
                  onMouseOver={() => this.showText('cat')}
                  onMouseOut={() => this.hideText('cat')}
                >
                  <span id="button-text-Cat" className="hidden">Català</span>
                </button>
              </div>
              <div className="arrow-down"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LanguagePopup;
