import React, { useState, useEffect } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const GetData = () => {
    setLoading(true);
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <Joke
        props={{
          joke,
          loading,
          hasError
        }}
      />
    </div>
  );
};

const Joke = ({ props }) => {
  const { joke, loading, hasError } = props;
  return (
    <div>
      <h1>Exercise 3: Random Joke Generator</h1>
      {loading && <span> Loading...</span>}
      {hasError ? (
        <h2> Sorry! we were not able to process your request </h2>
      ) : (
        <>
          <p> setup: {joke.setup} </p>
          <p> punchline: {joke.punchline} </p>
        </>
      )}
    </div>
  );
};

export default RandomJoke;
