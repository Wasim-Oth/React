import React, {useState, useEffect} from 'react';

const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [error, serError] = useState(false);
    const [loading, setLoading] = useState(false);

    
    const GetData = () => {
        setLoading(true);
        const url = 'https://official-joke-api.appspot.com/random_joke';
        fetch (url)
        .then (res => res.json())
        .then (data => {
            setJoke(data)
        })
        .catch (err => {
            console.error(err)
            serError(true)
        })
        .finally(() => setLoading(false))
        } 
    
    useEffect(() => {
        GetData()
        },[])

    return (
        <div>     
            <Joke props= {{
                joke: joke,
                loading: loading,
                error: error
            }} />
        </div>
    )
};


const Joke = ({props}) => {
    return (
        <div>
            <h1>Exercise 3: Random Joke Generator</h1>
            {props.loading && <h4>Loeading...</h4>}
            {props.error 
             ? <h2> Sorry! we were not able to process your request </h2> 
             : <> <p> setup: {props.joke.setup}</p> <p>punchline: {props.joke.punchline} </p> 
              </>}
        </div>
        
    )
}

export default RandomJoke;