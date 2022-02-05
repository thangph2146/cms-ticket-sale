import React, { useEffect } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Container from './layout/container/mainContainer';
import NavBarController from './layout/nav/mainNav';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import  config  from './firebase/config';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state'

function App() {
  const dispatch = useDispatch();
  const { fetchFirebase, fetchFirebaseSuccess, fetchFirebaseDefault } =
      bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
      fetchFirebase();
      const app = initializeApp(config);

      const d = getDatabase(app);
      const starCountRef = ref(d, 'data/');

      onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
              fetchFirebaseSuccess(data);
          } else {
              fetchFirebaseDefault();
          }
      });
  }, []);


  
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
