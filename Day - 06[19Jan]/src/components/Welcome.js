import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductComponent from './ProductComponent';
import EditProductModal from './EditProductModal'; // Import the EditProductModal
import axios from 'axios';

const Welcome = () => {
  const [products, setProducts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProductHandler = () => {
    navigate('/addProduct');
  };

  const openEditModal = (id) => {
    setSelectedProductId(id);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProductId(null);
  };

  const handleEdit = (id) => {
    openEditModal(id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/${id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <>
      <div>
        <button className="button is-success" onClick={addProductHandler}>
          Add Product
        </button>
      </div>
      <ProductComponent data={products} onEdit={handleEdit} onDelete={handleDelete} />
      <EditProductModal isOpen={isEditModalOpen} productId={selectedProductId} closeModal={closeEditModal} />
    </>
  );
};

export default Welcome;
