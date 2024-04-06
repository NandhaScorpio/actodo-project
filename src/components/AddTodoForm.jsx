import { useState } from "react";

function AddTodoForm(props) {
  const activityArr = props.activityArr;
  const setActivityArr = props.setActivityArr;

  const [newActivity, setNewActivity] = useState("");

  const handlechange = (evt) => {
    setNewActivity(evt.target.value);
  };

  const addActivity = () => {
    setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
    setNewActivity("")
  };

  return (
    <div>
      <div className="flex gap-3 flex-col">
        <h1 className="font-medium text-2xl">Manage Activities</h1>

        <div>
          <input
            type="text"
            value={newActivity}
            onChange={handlechange}
            className="border-2 border-black p-1 rounded-md bg-transparent"
            placeholder="Next Activity?"
          />
          <button
            className="bg-black text-white p-1 rounded border-2 border-black"
            onClick={addActivity}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodoForm;
