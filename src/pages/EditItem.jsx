import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getItem, updateItem } from "../api/api";
import Swal from "sweetalert2";

import ItemForm from "../components/ItemForm";
const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);
  // [], []

  const fetchItem = async () => {
    //axiosda melumatlar data adi ile gelir !
    const { data } = await getItem(id);
    setItem(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, item);

    Swal.fire({
      title: "Success!",
      text: "Element ugurla yenilendi.",
      icon: "success",
      confirmButtonText: "OK",
    });

    navigate("/")
  };

  return <div>
    <h1>Edit form</h1>
    <ItemForm item={item} setItem={setItem} onSubmit={handleSubmit} />
  </div>;
};

export default EditItem;
