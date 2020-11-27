import React, { useState } from "react";

const Friend = () => {
  const [friend, setFriend] = useState([]);
  const [hasError, setError] = useState(false);

  function GetFriend() {
    const url = "https://www.randomuser.me/api?results=1";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data.results[0]))
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }

  return (
    <div>
      <h1>Exercise 1: New friend on demand</h1>
      <Button fetch={GetFriend} />
      <FriendProfile
        friendProps={{
          friend,
          hasError,
        }}
      />
    </div>
  );
};

const FriendProfile = ({ friendProps }) => {
  const { friend, hasError } = friendProps;
  const { name, location, email, cell } = friend;
  return (
    <div className="friend_container">
      {name && (
        <ul>
          <li>First Name: {name.first}</li>
          <li>Last Name: {name.last}</li>
          <li>
            Address: {location.street.name},{location.street.number}
          </li>
          <li>Country: {location.country}</li>
          <li>Email: {email}</li>
          <li>Phone: {cell}</li>
        </ul>
      )}
      {hasError && (
        <h1> We were not able to process your request "shit happens dude" </h1>
      )}
    </div>
  );
};

const Button = (props) => {
  return (
    <button className="btn" onClick={props.fetch}>
      Get a friend!
    </button>
  );
};
export default Friend;
