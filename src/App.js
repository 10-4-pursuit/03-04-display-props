import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="App">
     <UserProfile name='Kyron' age={29}/>
    </div>
  );
}

export default App;
