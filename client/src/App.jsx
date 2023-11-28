import { Routes , Route, useNavigate } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"
import Login from "./components/Users/User-Login"
import Registration from "./components/Users/User-Registration"
import PlaceDetails from './components/Places/Place-Details'
import { useState } from 'react'
import AuthContext from './components/contexts/authContext'
import * as authService from './services/authService'

function App() {
  const navigate = useNavigate();
  const [auth,setAuth] = useState({});

  const loginSubmitHandler = async(values) => {
    console.log(values);
    const result = await authService.login(values.email,values.password)
    console.log(result);
    setAuth(result);
    navigate('/')
  };

  const registerSubmitHandler = async (values) =>{
    console.log(values.username);
    const result = await authService.register(values.email,values.password,values.username);

    console.log(`The result is : ${result}`)
    setAuth(result);
    navigate('/');
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username : auth.username,
    email : auth.email,
    isAuth : !!auth.email,
  }
 
  return (
    <AuthContext.Provider value={values}>
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
