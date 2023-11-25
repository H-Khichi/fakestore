import React, { createContext, useContext, useEffect, useState } from 'react';
import './products.css';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

export const cartContext = createContext();

export default function Products({ children }) {
  const [apiProduct, setApiProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await response.json();
        setApiProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
        <cartContext.Provider value={{ addToCart, quantity }}>

      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            {apiProduct.map((p, i) => (
              <div className="col-lg-4" key={i}>
                <div
                  className="cards"
                  style={{
                    border: '0.5px solid grey',
                    padding: '20px ',
                    margin: '20px 0px',
                    height: '600px',
                    overflow: 'hidden',
                    borderRadius: '10px',
                  }}
                >
                  <p>{p.category}</p>
                  <div className="card_btn">
                    <button className="add_btn" onClick={()=>addToCart()}>
                      <BsPlus className="text-3xl" />
                    </button>
                    <br />
                    <button className="view_btn">
                      <BsEyeFill />
                    </button>
                  </div>
                  <a href="">
                    <img
                      style={{ width: '300px', height: '300px', padding: '20px 10px' }}
                      src={p.image}
                      alt=""
                    />
                  </a>
                  <h5>{p.price}$</h5>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {children}</cartContext.Provider>
    </>
  );
}
