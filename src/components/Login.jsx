import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(props) {

    const navigate = useNavigate()

    const users = props.users

  const [usernameInput, setUsernameInput] = useState("");

  const [passwordInput, setPasswordInput] = useState("");

  function handleUsername(evt) {
    setUsernameInput(evt.target.value);
  }

  function handlePassword(evt) {
    setPasswordInput(evt.target.value);
  }

  const [nid, setNid] = useState(true);

  const checkUser = () => {

    var userfound = false

    users.forEach((item) => {
      if (item.username === usernameInput && item.pass === passwordInput) {
        setNid(true);
        userfound =true
        console.log("Login Successful")
        navigate("/app", {state:{user:usernameInput}})
      }
    })

    if (userfound === false)
    {
        console.log("Login Failed")
        setNid(false)
    }
    
    ;
  };

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {nid ? (
          <p className="text-green-700 font-bold">Please enter your username and password for logining :)</p>
        ) : (
          <p className="text-red-500 font-bold">Please Sign Up Before you Login!!</p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="User Name"
            value={usernameInput}
            onChange={handleUsername}
          />

          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            value={passwordInput}
            onChange={handlePassword}
          />

          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={checkUser}
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link to={"/signup"} className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
