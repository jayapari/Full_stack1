import './Item.css'

function Item(props)
{
    const itemName=props.name;
   return (<p className="arial">{itemName}<br></br>
      {props.children}
   </p>);
}

export default Item;