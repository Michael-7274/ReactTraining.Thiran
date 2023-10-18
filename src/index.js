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
    {/*<BrowserRouter>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/index">Index</Link></li> //Link cannot be given outside of BrowserRouter 
      </ul>
    </div>
    <Routes>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/index' element={<Index/>}></Route>
    </Routes>// Routes are necessary to provide the link path,must be provided inside the parent component inside BrowserRouter 

    </BrowserRouter>  //BrowserRouter must be inside the parent component*/}

    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<EmployeeSetComponent />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/details/:name' element={<Details/>}></Route>{/*here /:name--> you can only use name as const variable 
                                                                        in useparams(); you , 
                                                                        the /details is given only for 
                                                                        understanding*/}
        <Route exact path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
