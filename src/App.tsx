import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Container from './layout/container/mainContainer';
import NavBarController from './layout/nav/mainNav';
import ModalManager from './modules/modalManager/ModalManager';
import ModalSettingAdd from './modules/modalSetting/ModalSettingAdd';
import ModalSettingUpdate from './modules/modalSetting/ModalSettingUpdate';


function App() {
  return (
    <div className="main">
      <BrowserRouter>

          <NavBarController />
          <Container />
         
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
