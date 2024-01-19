import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProductComponent = ({ productId, closeModal }) => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    rating: '',
    brand: '',
    category: '',
    imageUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${productId}`);
        console.log('Fetched Product:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [productId]);
  

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/${productId}`, product);
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={product.title} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label>Rating:</label>
          <input type="text" name="rating" value={product.rating} onChange={handleChange} />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" name="brand" value={product.brand} onChange={handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={product.category} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProductComponent;
