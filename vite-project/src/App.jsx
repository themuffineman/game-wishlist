import { useState } from 'react'
import Games from './Games'
import './index.css'



function App() {
  
  const [input, setInput] = useState()


  function InputUpdate(e){
    setInput(e.target.value)
  }

  async function GetImage(){

    try{
      const imageData = await fetch(`https://api.api-ninjas.com/v1/animals?name=${input}`,{method: 'GET', headers: {'X-Api-Key': 'im6UqOHTsLg5q/kQc5vy1Q==8KE0dN3KlXLZLUFc'}})
      console.log(imageData)
    }
    catch(error){
      console.error(`Happy debugging: ${error}`)
    }
  }

  return (
    <>
      <h1>Browse all your favourite games</h1>
      <input type="text" value={input} onChange={InputUpdate} placeholder='Enter Animal Name'/>
      <button className='wishlist-add' onClick={GetImage}>Submit</button>
      <Games />
    </>
  )
}

export default App
