import { Routes , Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"
import Login from "./components/Users/User-Login"
import Registration from "./components/Users/User-Registration"
import PlaceDetails from './components/Places/Place-Details'
import { useState } from 'react'
import AuthContext from './components/contexts/authContext'

function App() {
  const [auth,setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }
 
  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
    <div id="page">
     <Navigation />
     <Routes>
      <Route path='/places' element = { <PlacesList />} />
      <Route path='/places/create' element = {<PlacesAdd />} />
      <Route path='/places/:id' element = {<PlaceDetails />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element = {<Login />} />
     </Routes>
 
     <Footer />
    </div>
    </AuthContext.Provider>
  )
}

export default App
