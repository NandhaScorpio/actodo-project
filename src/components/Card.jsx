function Card(props)
{
    return(
        <div
              style={{ backgroundColor: props.bgcolor }}
              className="px-10 py-5 rounded-md text-center flex-grow"
            >
              <h1 className="text-2xl font-medium">{props.title}</h1>
              <p>{props.desc}</p>
            </div>
    )
}


export default Card