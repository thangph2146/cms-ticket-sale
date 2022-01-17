import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Container from './layout/container/mainContainer';
import NavBarController from './layout/nav/mainNav';
import ModalManager from './modules/modalManager/ModalManager';
import ModalSetting from './modules/modalSetting/ModalSetting';


function App() {
  return (
    <div className="main">
      <BrowserRouter>

          <NavBarController />
          <Container />
         
      </BrowserRouter>
      <ModalManager />
      <ModalSetting />
    </div>
  );
}

export default App;
