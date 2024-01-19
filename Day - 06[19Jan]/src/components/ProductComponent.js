import React from 'react';

const ProductComponent = ({ data, onEdit, onDelete }) => {
  return (
    <div className="container is-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="title is-1 ">Product List</h2>
      <div className="columns is-multiline">
        {data.map((product) => (
          <div key={product.id} className="column is-one-third">
            <div className="card " style={{ width: '270px', height: '420px' }}>
              <div className="card-image">
                <figure className="image is-4by3 px-3">
                  <img src={product.imageUrl} alt={product.title} style={{ width: '220px' }} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-5">{product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
                <div className="buttons">
                  <button
                    className="button is-primary is-small"
                    onClick={() => onEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="button is-danger is-small"
                    onClick={() => onDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
