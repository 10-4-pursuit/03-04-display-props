import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile name = "Azmain" age = {26} />
      <UserProfile name = "notAzmain" age = {27} />
      
    </div>
  );
}

export default App;
