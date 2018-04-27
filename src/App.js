import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';


class App extends Component {

  state = {
    isFiltered:false,
    pendingGuest: "",
    guests: []
  };
  lastGuestId = 0;

  newGuestId = ()=>{
    const id = this.lastGuestId;
    this.lastGuestId += 1 ;
    return id;
  };

//Function that changes the propties on items in the applications state
  toggleGuestPropertyAt = (property, id) => 
    this.setState({
      guests: this.state.guests.map((guest) =>{
        if(id === guest.id){
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      })   
      });
        
/*Uses GuestProperty function to 
toggle the value of isConfirmed to either true or false */
  toggleConfirmationAt = id =>
      this.toggleGuestPropertyAt("isConfirmed", id);

/*Uses GuestProperty function to toggle the EDIT/SAVE button to 
allow the user to EDIT or  SAVE guests */
  toggleEditingAt = id =>{
      this.toggleGuestPropertyAt("isEditing", id)
    }

/*When Remove button is clicked on it targets the specific guest
clicked on and removes them from the Guest List and configures
key position*/
    toggleRemove = id =>
       this.setState({
         guests: this.state.guests.filter(guest => id !== guest.id)
       }); 


   
/* When called on it only shows the user the guests that have the 
property of isFiltered at false and will hide those that have it true */        
  toggleFilter = ()=>{
      this.setState({ isFiltered: !this.state.isFiltered });
    }


//
  getTotalInvited = ()=> 
    this.state.guests.length;

  getTotalConfirmed = ()=>
  this.state.guests.reduce(
    (total, guests)=> guests.isConfirmed ? total + 1 : total
  , 0)


  handleNameInput = e => 
  this.setState({pendingGuest: e.target.value});

  addGuest = e =>{
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed:false,
          isEditing: false,
          id,
        },
          ...this.state.guests
      ],

      pendingGuest: ''
  });
}


 setNameAt = (name, id) => 
  this.setState({
    guests: this.state.guests.map( guest =>{
      if(id === guest.id){
        return {
          ...guest,
          name,
        };
      }
      return guest;
    })   
    });




  render() {
    const totalInvited = this.getTotalInvited();
    const totalConfirmed = this.getTotalConfirmed();
    const totalUnconfirmed = totalInvited - totalConfirmed;
    return (
      <div className="App">
        <Header 
        addGuest={this.addGuest}
        handleNameInput={this.handleNameInput}
        pendingGuest= {this.state.pendingGuest}
        />
        <Main 
        toggleFilter={this.toggleFilter}
        isFiltered={this.state.isFiltered}
        totalInvited={totalInvited}
        numberAttending={totalConfirmed}
        numberUnconfirmed={totalUnconfirmed}
        guests={this.state.guests} 
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        toggleRemove={this.toggleRemove}
        pendingGuest={this.state.pendingGuest}
        />
      </div>
    )
  }
};
export default App;
