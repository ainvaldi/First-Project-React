import { useState } from 'react'
import MyButton from './Components/myButton'
import './App.css'
import UsersContainer from './Components/Users/UsersContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menubar } from 'primereact/menubar'


function App() {
  const [count, setCount] = useState(1)

  const items = [
    { label: 'Usuarios', icon: 'pi pi-users', url: '/usuarios' }
  ]

  return (
    <BrowserRouter>
      <Menubar model={items} />
      <Routes>
        <Route path='/usuarios' element={<UsersContainer />} />
      </Routes>
      <div className="card">
        <MyButton count={count} setCount={setCount} />

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </BrowserRouter>
  )
}

export default App
