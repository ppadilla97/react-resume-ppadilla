import React, { useState } from 'react';
import "../languagePopup.css"

function LanguagePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    // Aquí puedes agregar la lógica para cambiar el idioma en tu aplicación
    console.log("Idioma cambiado!!");
  };

  function showText(id) {
    if (id == 'en'){
        document.getElementById('button-text-En').classList.remove('hidden');
        document.getElementById('button-text-En').classList.add('visible');
    }
    else if (id == 'es'){
        document.getElementById('button-text-Esp').classList.remove('hidden');
        document.getElementById('button-text-Esp').classList.add('visible');
    }
    else {
        document.getElementById('button-text-Cat').classList.remove('hidden');
        document.getElementById('button-text-Cat').classList.add('visible');
    }
  }
  
  function hideText(id) {
    if (id == 'en'){
        document.getElementById('button-text-En').classList.remove('visible');
        document.getElementById('button-text-En').classList.add('hidden');
    }
    else if (id == 'es'){
        document.getElementById('button-text-Esp').classList.remove('visible');
        document.getElementById('button-text-Esp').classList.add('hidden');
    }
    else {
        document.getElementById('button-text-Cat').classList.remove('visible');
        document.getElementById('button-text-Cat').classList.add('hidden');
    }
    
  }

  return (
    <div className='divPopup'>
      <a style={{cursor: 'pointer'}} onClick={togglePopup}>Change Language</a>
      {showPopup && (
        <div className="popup">
            <div className='comic-bubble'>   
            <p className="optionsText">Select a Language</p>
                <div className="buttonsList">
                    <button className="buttonLanguageEsp" onClick={() => changeLanguage('es')} onMouseOver={() => showText('es')} onMouseOut={() => hideText('es')}>
                        <span id="button-text-Esp" class="hidden">Español</span>
                    </button>
                    <button className="buttonLanguageEn" onClick={() => changeLanguage('en')} onMouseOver={() => showText('en')} onMouseOut={() => hideText('en')}>
                        <span id="button-text-En" class="hidden">English</span>
                    </button>
                    <button className="buttonLanguageCat" onClick={() => changeLanguage('cat')} onMouseOver={() => showText('cat')} onMouseOut={() => hideText('cat')}>
                        <span id="button-text-Cat" class="hidden">Català</span>
                    </button>
                </div>  
                <div class="arrow-down"></div>      
            </div>   
        </div>
      )}
    </div>
  );
}



export default LanguagePopup;