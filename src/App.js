import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app'; // Importe o Firebase
import 'firebase/compat/auth'; // Importe o módulo de autenticação
import Home from './components/Home';
import Adm from './components/Adm';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyB65RwcQ3Wb-77uPhDUSt6979jWLcENEIo",
  authDomain: "revelar-52260.firebaseapp.com",
  projectId: "revelar-52260",
  storageBucket: "revelar-52260.firebasestorage.app",
  messagingSenderId: "160499023981",
  appId: "1:160499023981:web:ba6859a10cabe76b7ebf64",
  measurementId: "G-X3VRN59C4M"
};

const app = firebase.initializeApp(firebaseConfig);

// Exporte a instância do Firebase para que outros componentes possam acessá-la
export const firebaseApp = app;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adm" element={<Adm />} />        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;