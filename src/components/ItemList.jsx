import React from 'react'
import { Link } from 'react-router-dom'


const ItemList = ({items,onDelete}) => {
  return (
   <ul>
    {/* massivlere [{}, {}, {}, {}] */}
    {items.map(item => (
        //Each child should have unique key
        <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
    ))}
   </ul>
  )
}

export default ItemList