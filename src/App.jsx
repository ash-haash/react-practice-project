import { useEffect, useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
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
    const isExist = cart.find(item => item.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    }
    else {
      alert('Already in cart');
    }
  }

  const removeFromCart = id => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
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
        <div className="w-1/3 shadow-md cart-container ml-4 p-10">
          <h2 className="text-3xl p-4 border-b-2">This is Cart</h2>
          <div className="flex justify-between p-2 border-b">
            <h4>Name</h4>
            <h4>Price</h4>
          </div>
          <div>
            {
              cart.map((item) => (
                <>

                  <div className="flex justify-between items-center p-2 w-full">
                    <h4>{item.title.slice(0, 10)}</h4>
                    <div className="flex items-center justify-center">
                      <h4>{item.price} $</h4>&#160;&#160;
                      <button onClick={() => removeFromCart(item.id)} className="text-red-700"><RiDeleteBack2Fill />
                      </button>
                    </div>

                  </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
