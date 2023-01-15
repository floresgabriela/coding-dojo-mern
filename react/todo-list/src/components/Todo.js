

const Todo = (props) => {
    
    const classes = [];
    if (props.item.complete) {
        classes.push('strike');
    }
    
    return (
        <div>
            <input type="checkbox" checked={props.item.complete} onChange={(e) => { props.handleChecked(props.i) }}/>
            <p className={classes.join(" ")}>{props.item.text}</p>
            <button onClick={(e) => { props.handleDelete(props.i) }}>Delete</button>
        </div>
    );
}

export default Todo;