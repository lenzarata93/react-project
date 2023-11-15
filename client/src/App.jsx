import { Routes , Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"
import Login from "./components/Users/User-Login"
import Registration from "./components/Users/User-Registration"

function App() {
 
  return (
    <div id="page">
     <Navigation />
     <Routes>
      <Route path='/places' element = { <PlacesList />} />
      <Route path='/places/add' element = { <PlacesAdd />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element = {<Login />} />
     </Routes>
 
     <Footer />
    </div>
  )
}

export default App
