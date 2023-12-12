import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile.js';

function App() {
  return (
    <div className="App">
      <h1>
        <UserProfile 
        name = "Jann"
        age = "22"
        />;
      </h1>
    </div>
  );
}

export default App;
