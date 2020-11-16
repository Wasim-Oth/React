import React, {useState} from 'react';

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [Error, setError] = useState(false);

    const getDogPhoto = () => {
        setLoading(true)
        const url = 'https://dog.ceo/api/breeds/image/random';
        fetch (url)
        .then (res => res.json())
        .then (data => setDogPhotos([...dogPhotos, data.message]))
        .catch (err => {
            console.log(err)
            setError (true)
        })
        .finally (() => setLoading(false))
    };

    return(
        <div>
            <Button fetch= {getDogPhoto} />
            <DogPhoto props= {{
                dogPhotos: dogPhotos,
                loading: loading,
                Error: Error
                }} />
        </div>
    )
};

const DogPhoto = ({props}) => {
    return (
        <div>
            {props.loading && <h4> Loading...</h4>}
            {props.Error && <h2> Sorry! we were not able to process your request </h2>}
            { (!props.Error && props.dogPhotos.length === 0) && <h2> Get your first dog by clicking the button! </h2> } 
            { (!props.Error && props.dogPhotos)  && props.dogPhotos.map((dog, index) => <img src={dog} key={index} alt='dog' />) }
        </div>
    )
};

const Button = (props) => {
    return <button onClick={props.fetch}> Get a dog </button>
};

export default DogGallery; 