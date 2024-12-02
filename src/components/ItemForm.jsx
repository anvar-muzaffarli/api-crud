import React from 'react'

const ItemForm = ({item,setItem,onSubmit}) => {
//PROMPT VASITESILE
    const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target
        setItem((prev) => ({...prev, [name]:value}))
    }

  return (
    //sintetik event
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">Todonun adi</label>
            <input 
            type="text" 
            name='name' 
            value={item.name || ''}
            onChange={handleChange}
            />
        </div>


        <div>
            <label htmlFor="aciqlama">Aciqlama</label>
            <textarea 
            name="description" 
            id="aciqlama" 
            value={item.description || ''}
            onChange={handleChange}
            
            ></textarea>
        </div>

    <button type='submit'>Elave et</button>
    </form>

  )
}

export default ItemForm