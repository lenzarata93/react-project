import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"

function App() {
 
  return (
    <div id="page">
     <Navigation />
     <PlacesList />
     <PlacesAdd />
     <Footer />
    </div>
  )
}

export default App
