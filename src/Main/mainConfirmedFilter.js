import React from 'react';
import Proptypes from 'prop-types';




const MainConfirmedFilter = props =>
<div>
<h2>Invitees</h2>
    <label>
    <input 
    type="checkbox"
    onChange={props.toggleFilter}
    checked={props.isFiltered}
    />{" "}Hide those who haven't responded
    </label>
</div>


MainConfirmedFilter.Proptypes = {
    toggleFilter: Proptypes.func.isRequired,
    isFiltered: Proptypes.func.isRequired,
}

export default MainConfirmedFilter;