import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Individual from './components/Individual/Individual';

function App() {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setPerson(data.slice(0, 20)))

  }, [])
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Individual person={person}></Individual>

      </div>
    </div>
  );
}

export default App;
