import React from "react";
import PropTypes from "prop-types";
import Guest from "./guest";
import PendingGuest from './pendingGuest';

const GuestList = props => 
    <ul>
        <PendingGuest name={props.pendingGuest}/>
        {props.guests.filter(guest => !props.isFiltered || guest.isConfirmed )
        .map((guest, index) =>
        <Guest 
        key={index}
        name={guest.name} 
        isConfirmed={guest.isConfirmed} 
        isEditing={guest.isEditing}
        handleConfirmation={()=> props.toggleConfirmationAt(guest.id)}
        handleEditing={()=> props.toggleEditingAt(guest.id)}
        setName={text => props.setNameAt(text,guest.id) }
        handleRemove={()=> props.toggleRemove(guest.id)}
        />
        )}
    </ul>

    GuestList.PropTypes = {
        guests: PropTypes.array.isRequired,
        toggleConfirmationAt: PropTypes.func.isRequired,
        toggleEditingAt: PropTypes.func.isRequired,  
        setName: PropTypes.func.isRequired,
        isFiltered: PropTypes.bool.isRequired,
        toggleRemove:PropTypes.func.isRequired,
        pendingGuest: PropTypes.string.isRequired,
    }

export default GuestList;