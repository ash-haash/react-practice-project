import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './Components/SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  // console.log(products);

  const handleCart = p => {
    const isExist = cart.find(product => product.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    }
    else {
      alert('Already in cart');
    }
  }

  return (
    <>
      <div className="flex justify-between main-container">
        <div className="w-2/3 cards-container flex flex-wrap justify-between gap-6">
          {
            products.map(product => <SingleProduct
              key={product.id}
              handleCart={handleCart}
              product={product}
            ></SingleProduct>)
          }
        </div>
        <div className="w-1/3 shadow-md cart-container ml-4">
          <h2 className="text-3xl p-4 border-b-2">This is Cart</h2>
        </div>
      </div>
    </>
  )
}

export default App
