import Friend from './new-friend';
import DogGallery from './dog-photo';
import RandomJoke from './random-joke';

function App() {
  
  return (
    <div className="App">
     <Friend />
     <hr/>
     <RandomJoke/>
     <hr/>
     <DogGallery/>
    </div>
  );
}

export default App;
