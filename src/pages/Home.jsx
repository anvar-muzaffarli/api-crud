import React, {useEffect, useState} from 'react'
import {getItems, deleteItem} from "../api/api"
import Swal from "sweetalert2"
import ItemList from '../components/ItemList'
//componentDidMount, componentDidUpdate, componentUnmount - Class Component Lifecycle methods
const Home = () => {
    const [items, setItems ] = useState([])

    useEffect(()=> {
        //Hook
        //Komponentin yasam dongusune nezaret edir
        fetchItems()
    }, [])

    const fetchItems = async() => {
        const {data} = await getItems() //axios data
        setItems(data)
        
    }

    const handleDelete = async(id) => {
        const result = await Swal.fire({
            title:"Eminsenmi?",
            text: "Sen bunu geriye qaytara bilmeyeceksen",
            icon:"warning",
            showCancelButton:true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sil"
        })

//swal true false
        if(result.isConfirmed) {
            await deleteItem(id)
            //
            fetchItems()
            Swal.fire("Silindi!", "Todonu ugurla sildin", "success")
        }
    }



  return (
    <div>
        <h1> Todo siyahilari</h1>
        {/* properties props */}
        <ItemList items={items} onDelete={handleDelete}  />
    </div>
  )
}

export default Home