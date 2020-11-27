import React, { useState } from "react";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  let photosKey = 1;

  const getDogPhoto = () => {
    setLoading(true);
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDogPhotos([...dogPhotos, data.message]))
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Exercise 2: Dog photo gallery</h1>
      <Button fetch={getDogPhoto} />
      {loading && <h4> Loading...</h4>}
      {hasError && <h2> Sorry! we were not able to process your request </h2>}

      {!hasError && dogPhotos.length === 0 && (
        <h3> Get your first dog by clicking the button! </h3>
      )}

      {dogPhotos.map((dog) => {
        return (
          <DogPhoto src={dog} key={photosKey++} alt="dog" />
        );
      })}
    </div>
  );
};

const DogPhoto = ({ src }) => {
  return (
    <div>
      <img src={src} alt="doggi" />
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.fetch}> Get a dog </button>;
};

export default DogGallery;
