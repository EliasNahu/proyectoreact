import './css/App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error'
//navegation for react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a A Gabarda" />} />
        <Route path="/category/:categoryId" element= {<ItemListContainer greeting="Bienvenido a A Gabarda" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App