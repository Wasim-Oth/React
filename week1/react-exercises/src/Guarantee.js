function Guarantee (props){

    return (
        <div>
            <img alt={props.mode} src={props.source} />
             <h3>{props.name}</h3>
             <p>{props.description}</p>
         </div>
    )
}

export default Guarantee