function Guarantee (props){
    const {mode,source, name, description } = props;
    return (
        <div>
            <img alt={mode} src={source} />
             <h3>{name}</h3>
             <p>{description}</p>
         </div>
    )
}

export default Guarantee