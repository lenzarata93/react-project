import { Routes , Route, useNavigate } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import PlacesList from "./components/Places/Places-List"
import PlacesAdd from "./components/Places/Places-Add"
import Login from "./components/Users/User-Login"
import Logout from './components/Users/Logout'
import Registration from "./components/Users/User-Registration"
import PlaceDetails from './components/Places/Place-Details'
import { useState } from 'react'
import AuthContext from './components/contexts/authContext'
import * as authService from './services/authService'
import AuthGuard from './components/AuthGuard'
import PlaceEdit from './components/Places/Place-Edit'

function App() {
  const navigate = useNavigate();
  const [auth,setAuth] = useState(()=>{
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async(values) => {
    console.log(values);
    const result = await authService.login(values.email,values.password)
    console.log(result);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate('/')
  };

  const registerSubmitHandler = async (values) =>{
    console.log(values);
    const result = await authService.register(values.email,values.password,values.username);

    console.log(`The result is : ${result.username}`)
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate('/');
  };

  const logoutHandler =() => {
    setAuth({});
    localStorage.removeItem('accessToken');
   
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username : auth.username,
    email : auth.email,
    isAuth : !!auth.accessToken,
  }
 
  return (
    <AuthContext.Provider value={values}>
    <div id="page">
     <Navigation />
     <Routes>
      <Route path='/places' element = { <PlacesList />} />
      <Route path='/places/:id' element = {<PlaceDetails />} />
      <Route path='/places/edit/:id' element = {<PlaceEdit />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element = {<Login />} />

      <Route element = {<AuthGuard />} >
      <Route path='/places/create' element = {<PlacesAdd />} />
      <Route path='/logout' element = {<Logout />} />
      </Route>

     </Routes>
 
     <Footer />
    </div>
    </AuthContext.Provider>
  )
}

export default App
