import React from 'react';
import PropTypes from "prop-types";

const GuestName = props =>{
    if(props.isEditing){
        return(
            <input 
            type='text' 
            value={props.children}
            onChange={props.handleNameEdits}
            />
        );
    }
    return (
        <span>{props.children}</span>
    )
}



GuestName.PropTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdit: PropTypes.func.isRequired,
}
export default GuestName;
