import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";

import {useLocation} from "react-router-dom"

function App() {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let name = month[d.getMonth() + 1];

  const data = useLocation()

  console.log(data.state)

  

  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 rounded-md">
          <Header data={data.state.user}/>

          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23°"} desc={"Chennai"} />
            <Card bgcolor={"#FD6663"} title={name} desc={showTime} />
            <Card bgcolor={"#FCA201"} title={"Built Using"} desc={"React"} />
          </div>

          <TodoContainer />
        </div>
      </div>
    </>
  );
}

export default App;
