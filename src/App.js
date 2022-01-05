import React,{useState} from 'react';
import AddRegistration from './AddRegistration';
//import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import RegistrationList from './RegistrationList';


function App() {
  
  const [registrations,setRegistrations] = useState([]);

  const addRegistrationHandler = (registration) => {
         console.log(registration);
         setRegistrations([...registrations,registration]);
  };

  return (
    <div className="ui container">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <h1>Hello World ........ Welcome </h1>
        <br/>
        <br/>
        <Header />
        <br/>
        <br/>
        <AddRegistration addRegistrationHandler={addRegistrationHandler}/>
        <RegistrationList registrations= {registrations} />
    </div>
  );
}
export default App;
