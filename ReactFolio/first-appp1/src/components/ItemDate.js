import './ItemDate.css';

function ItemDate(props)
{
    const day = props.day;
    const month = props.month;

    return (
        <div className='newDate'>
            <span>{day} </span>
            <span>{month}</span>
            
        </div>
    );
}

export default ItemDate;