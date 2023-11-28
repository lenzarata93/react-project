import { Routes , Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"
import Login from "./components/Users/User-Login"
import Registration from "./components/Users/User-Registration"
import PlaceDetails from './components/Places/Place-Details'
import { useState } from 'react'

function App() {
  const [auth,setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }
 
  return (
    <div id="page">
     <Navigation />
     <Routes>
      <Route path='/places' element = { <PlacesList />} />
      <Route path='/places/create' element = {<PlacesAdd />} />
      <Route path='/places/:id' element = {<PlaceDetails />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element = {<Login  loginSubmitHandler={loginSubmitHandler}/>} />
     </Routes>
 
     <Footer />
    </div>
  )
}

export default App
