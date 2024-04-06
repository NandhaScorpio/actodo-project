import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signup(props) {
  const users = props.users;

  const navigat = useNavigate()

  const setUsers = props.setUsers;

  const [enUsername, setEnUsername] = useState();

  const [enPassword, setEnPassword] = useState();

  const [enCoPassword, setEnCoPassword] = useState();

  const [checking, setChecking] = useState(true);

  function handleUser(evt) {
    setEnUsername(evt.target.value);
  }

  function handlePass(evt) {
    setEnPassword(evt.target.value);
  }

  function handleCoPass(evt) {
    setEnCoPassword(evt.target.value);
  }

  function addUser() {
    if (enPassword === enCoPassword) {
      setUsers([...users, { username: enUsername, pass: enPassword }]);
      console.log(users);
      setChecking(true)
      navigat("/")
    }
    else{
      setChecking(false)
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {checking ? (
          <p className="text-green-800 font-bold">Sign up here :)</p>
        ) : (
          <p className="text-red-500 font-bold">
            Enter the password and confirm password correctly.
          </p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="User Name"
            value={enUsername}
            onChange={handleUser}
          />

          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            value={enPassword}
            onChange={handlePass}
          />

          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm Password"
            value={enCoPassword}
            onChange={handleCoPass}
          />

          <button
            className="bg-[#FCA201] w-24 p-1 rounded-md"
            onClick={addUser}
          >
            Sign Up
          </button>

          <p>
            Already have an account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
