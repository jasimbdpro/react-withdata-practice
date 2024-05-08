import './App.css';
import FriendList from './components/FriendList/FriendList';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='home-page'>
        <Wrapper></Wrapper>
        <FriendList></FriendList>
      </div>
    </div>
  );
}

export default App;
