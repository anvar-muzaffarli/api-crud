import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import { createItem } from "../api/api"
import Swal from "sweetalert2"
import ItemForm from "../components/ItemForm"

const AddItem = () => {
    const [item, setItem] = useState({})
    // useNavigate qetiyyen harada istifade olunmaz: for, if, returnun icinde istifade olunmaz
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await createItem(item)
        Swal.fire({
            title:"Success",
            text: "Element elave olundu",
            icon:"success",
            confirmButtonText: "Anladim"
        })

        navigate("/")

        

    }

    return (
        <div>
            <h1>Yeni todo elave et</h1>
            {/* PROPS NEDIR */}
            <ItemForm item={item} setItem={setItem} onSubmit={handleSubmit}  />
            
        </div>
    )


}

export default AddItem


