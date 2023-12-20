import logo from './logo.svg';
import './App.css';
import UserProfile  from "./UserProfile"

function App() {

  const user= {
    username: "Claire Petit Frere",
    age: 22,
  }
  return (
    <div className="App">
      <UserProfile username={user.username} age={user.age}/>
    </div>
  );
}

export default App;
