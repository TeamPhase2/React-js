import React from "react";
import RegistrationCard from "./RegistrationCard"

const RegistrationList = (props) => {
    console.log(props);

const renderRegistrationList = props.registrations.map((registration) => {
    return <RegistrationCard registration = {registration}></RegistrationCard>;    
});
    return(
        <div className="ui celled list">
        {renderRegistrationList}</div>
    );

}
export default RegistrationList;