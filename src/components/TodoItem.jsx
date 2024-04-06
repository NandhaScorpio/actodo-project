function TodoItem(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const emptying = activityArr==[]?true:false

    function handleDelete(id)
    {
        var temparr = activityArr.filter(
            (item)=>{
                if(item.id === id)
                {
                    return false
                }

                else{
                    return true
                }
            }

            
        )

        setActivityArr(temparr)
    }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}:{props.items.activity}
      </p>
      <button className="text-red-500" onClick={()=>{handleDelete(props.id)}}>Delete</button>
    </div>
  );
}

export default TodoItem;
