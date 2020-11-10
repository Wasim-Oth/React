import React from 'react';

function Hobbies(props) {
    return <li> {props.name} </li>;
  }

 function HobbyList() {
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return <ul> {hobbies.map(hobby => <Hobbies name={hobby}/>)} </ul>;
  }


export default HobbyList;