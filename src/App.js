import React from 'react';
import ReactDom from 'react-dom'
import logo from './logo.svg';
import './App.css';
import JobDetailDiv2 from './AfterLoginComponents/JobDetailDiv2'
import JobDetailDiv from './AfterLoginComponents/JobDetailDiv'
import JobDiv from './AfterLoginComponents/JobDiv'
import LoginNavbar from './AfterLoginComponents/LoginNavbar'
import CompanyDetails from './AfterLoginComponents/CompanyDetails'
import Jobs from './AfterLoginComponents/Jobs'
import JobTitle from './AfterLoginComponents/JobTitle'
import Driver from './AfterLoginComponents/Driver'
import AdminDetails from './AfterLoginComponents/AdminDetails'
import {BrowserRouter,Route} from 'react-router-dom'
import RegisterForEmployees from './Components/RegisterForEmployees'
import RegisterFordriver from './Components/RegisterFordriver'
import RegisterFordriverContactForm from './Components/RegisterFordriverContactForm'
import DriversPermit from './Components/DriversPermit'
import DriverEducation from './Components/DriverEducation'
import DriverExperience from './Components/DriverExperience'
import AdditionalDetails from './Components/AdditionalDetails'
import TermsAndConditions from './Components/TermsAndConditions'
import JobPortal from './Components/Jobportal'
import BookedDriver from './AfterLoginComponents/BookedDriver'
import TempPool from './AfterLoginComponents/TempPool'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
  <BrowserRouter>
     
		
    <LoginNavbar />
    <Route exact path="/JobPortal" component={JobPortal}  />
     <Route  path="/CompanyDetails" component={CompanyDetails}  />
       <Route  path="/Driver" component={Driver}  />
       <Route  path="/Jobs" component={Jobs}  />
       <Route path="/JobTitle" component={JobTitle}  />
       <Route  path="/RegisterForEmployees" component={RegisterForEmployees}  />
       <Route  path="/RegisterFordriver" component={RegisterFordriver}  />
       <Route  path="/RegisterFordriverContactForm" component={RegisterFordriverContactForm}  />
       <Route path="/DriverEducation" component={DriverEducation}  />
     <Route path="/DriverExperience" component={DriverExperience}  />
     <Route  path="/DriverEducation" component={DriverEducation}  />
     <Route  path="/DriversPermit" component={DriversPermit}  />
     <Route  path="/AdminDetails" component={AdminDetails}  />
     <Route  path="/JobDiv" component={JobDiv}  />
     <Route  path="/JobDetailDiv" component={JobDetailDiv}  />
     <Route  path="/BookedDriver" component={BookedDriver}  />
      <Route exact path="/TermsAndConditions" component={TermsAndConditions}  />
      <Route exact path="/JobDetailDiv2" component={JobDetailDiv2}  />
      <Route exact path="/TempPool" component={TempPool}  />
     
      
      </BrowserRouter>
    </div>
  );
}

export default App;
