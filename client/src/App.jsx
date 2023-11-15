import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"
import Registration from "./components/Users/User-Registration"
import Login from "./components/Users/User-Login"

function App() {
 
  return (
    <div id="page">
     <Navigation />
     <PlacesList />
     <PlacesAdd />
     <Registration />
     <Login />
     <Footer />
    </div>
  )
}

export default App
