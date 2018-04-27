import React from 'react';
import PropTypes from 'prop-types';
import HeaderForm from './headerForm';


const Header = props =>

<header>
    <h1>RSVP</h1>
    <p>Kevin Becerra React Js App</p>
    <HeaderForm
    addGuest={props.addGuest} 
    handleNameInput={props.handleNameInput}
    pendingGuest={props.pendingGuest}
    />
    </header>;

Header.PropTypes = {
    addGuest: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default Header;