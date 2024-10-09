import { useEffect, useState } from 'react'
import './home.css' 

const Home = () => {
  const [data, setData] = useState()
  const [error, setError] = useState('')

  useEffect(()=> {
    fetch("https://my-json-server.typicode.com/Amir-Mohebali/shop-api/products")
      .then((res) => {return res.json()})
      .then((resp) => setData(resp))
      .catch((err) => setError(err))
  }, [])

  console.log(data)

  return (
    <>
      <h2 className='title'>Welcome to my shop</h2>
      <p className='subtitle'>This is my first E-commerce project</p>
      <div className='content'>
        {data 
          ? data
              .filter(item => item.Cat === 'phone')
              .map(item => (
                  <div>
                      <h3>{item.Brand} {item.Model}</h3>
                      <div>{item.price}</div>
                  </div>
              ))
          : <h3>{error}</h3>
        }
      </div>
    </>
  )
}

export default Home