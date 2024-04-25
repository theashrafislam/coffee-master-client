import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='p-24'>

      <h1 className='text-2xl text-center font-bold'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
