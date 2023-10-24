import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmployeeSetComponent from './myComponents/employeeCardsComponents/EmployeeSetComponent';
import AccordinShow from './myComponents/accordinComponent/AccordinShow';
import Pagination from './myComponents/paginationComponent/Pagination';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './myComponents/employeeCardsComponents/routing/Home';
import PageNotFound from './myComponents/employeeCardsComponents/routing/PageNotFound';
import Details from './myComponents/employeeCardsComponents/routing/Details';
import Accordin from './myComponents/liftingTheStateUp/Accordin';
import ParentBoard from './myComponents/ticTacToe/ParentBoard';
import TicTacToe from './myComponents/singleComponentTicTacToe/TicTacToe';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ParentBoard />
    {/* <TicTacToe/> */}
  </React.StrictMode>
);

reportWebVitals();
