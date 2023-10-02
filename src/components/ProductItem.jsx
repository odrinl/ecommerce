import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h3>{id.title}</h3>
      <p>{id.description}</p>
      <p>Price: {id.price}</p>
    </div>
  );
}

export default ProductItem;
