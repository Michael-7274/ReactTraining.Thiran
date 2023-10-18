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

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<EmployeeSetComponent/>}></Route>
<Route exact path="/details/:name" element={<Details/>}></Route>
  <Route exact path="*" element={<PageNotFound/>}></Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
