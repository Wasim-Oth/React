import React, { useState } from 'react';

 const Friend = () => {
 const [friend, setFriend] = useState([]);
 const [hasEroor, setError] = useState(false);
 
 function GetFriend () {
    const url = 'https://www.randomuser.me/api?results=1';
    fetch (url)
    .then(res => res.json())
    .then (data => setFriend(data.results[0]))
    .catch (err => {
        setError(true)
        console.error(err)
    });
 };

 return (
     <div>
         <h1>Exercise 1: New friend on demand</h1>
        <Button fetch= {GetFriend} />
        <FriendProfile friendProps= {{
            friend: friend,
            error: hasEroor
        }} />
    </div>
 )
};

const FriendProfile = ({friendProps}) => {
    const {friend, error} = friendProps;
    console.log(friend)
    return (
        <div className= 'friend_container'>
            {friend.name &&
            <ul>
                <li>First Name: {friend.name.first}</li>
                <li>Last Name: {friend.name.last}</li>
                <li>Address: {friend.location.street.name},{friend.location.street.number}</li>
                <li>Country: {friend.location.country}</li>
                <li>Email: {friend.email}</li>
                <li>Phone: {friend.cell}</li>
            </ul>
            }
            {error && <h1> We were not able to process your request "shit happens dude" </h1> }
        </div>
    )
};

const Button = (props) => {
    return <button className='btn' onClick={props.fetch}> Get a friend! </button>
};
export default Friend