import React from 'react';
import Proptypes from 'prop-types';


const HeaderForm = props =>

    <form onSubmit= {props.addGuest}>
        <input
        type="text" 
        onChange={props.handleNameInput}
        value={props.pendingGuest}
        placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>

HeaderForm.Proptypes = {
    addGuest: Proptypes.func.isRequired,
    handleNameInput: Proptypes.func.isRequired,
    pendingGuest: Proptypes.string.isRequired,
}


export default HeaderForm;