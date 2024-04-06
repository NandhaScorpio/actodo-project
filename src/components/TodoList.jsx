import TodoItem from "./TodoItem";

function TodoList(props) {

  const activityArr = props.activityArr
  const setActivityArr = props.setActivityArr
  

  return (
    <div className="bg-[#BDB4EA] rounded-md p-2 flex-grow">
      <h1 className="font-medium text-2xl pb-2">Today's Activity</h1>
      {activityArr.length===0?<p className="pb-2">You haven't added anything yet</p>:<p className="pb-2" style={{display:"none"}}>You haven't added anything yet</p>}
      {activityArr.map((items, index) => {
        return (
          <TodoItem id={items.id} items={items} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
        );
      })}
    </div>
  );
}

export default TodoList;
