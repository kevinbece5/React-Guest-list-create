import React from 'react';
import PropTypes from 'prop-types';
import MainConfirmedFilter from './mainConfirmedFilter';
import Counter from './counter';
import GuestList from "./guestList"

const Main = props => 
  <div className="main">
    <MainConfirmedFilter
    toggleFilter={props.toggleFilter}
    isFiltered={props.isFiltered}
    />
    <Counter 
    numberInvited={props.totalInvited}
    numberAttending={props.totalConfirmed}
    numberUnconfirmed={props.totalUnconfirmed}
    />
    <GuestList 
    guests={props.guests} 
    toggleConfirmationAt={props.toggleConfirmationAt}
    toggleEditingAt={props.toggleEditingAt}
    setNameAt={props.setNameAt}
    isFiltered={props.isFiltered}
    toggleRemove={props.toggleRemove}
    pendingGuest={props.pendingGuest}
    />
  </div>;


Main.PropTypes ={
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  totalConfirmed: PropTypes.number.isRequired,
  totalUnconfirmed: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  toggleRemoveL: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}



export default Main;