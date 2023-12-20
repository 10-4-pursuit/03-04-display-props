const name = "Kyron";
const age = 29;
// const userProfile = <h2> Hello, I'm {name} and I'm {age}!</h2>;

function UserProfile(props) {
    return <h1>Hi, my I'm {props.name} and I'm {props.age}</h1>
}

// const userName = <Hi, name="Kyron", age="29"

export default UserProfile