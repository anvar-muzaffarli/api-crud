import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL


export const getItems = async() => axios.get(API_URL)
export const getItem = async(id) => axios.get(`${API_URL}/${id}`)
export const createItem = async(item) => axios.post(API_URL, item)
export const updateItem = async(id,item) => axios.put(`${API_URL}/${id}`, item)
export const deleteItem = async(id) => axios.delete(`${API_URL}/${id}`)




