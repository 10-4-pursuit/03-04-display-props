import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile.js';

function App() {
  const exampleAge = 30
  return (
    <div className="App">
      <UserProfile username="Lanell" age={exampleAge}/>
    </div>
  );
}

export default App;
