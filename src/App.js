import logo from './logo.svg';
import './App.css';
import './UserProfile';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile username='Edgar Collado' age={31}/>
    </div>
  );
}

export default App;
