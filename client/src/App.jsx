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
import Home from './components/Home'
import About from './components/About'
import showError from './lib/errorUtil'


function App() {
  const navigate = useNavigate();
  const [auth,setAuth] = useState(()=>{
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async(values) => {
    console.log(values);
    try {
      const result = await authService.login(values.email,values.password)
      console.log(result);
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
      navigate('/')
      
    } catch (error) {
      showError(error)
    }
   
  };

  const registerSubmitHandler = async (values) =>{
    console.log(`Стойности при регистрация са : ${Object.values(values)}`);

    try {
      if(!values.email || !values.username || !values.password || !values.confirm_password){
        throw new Error ('Всички полета са задължителни!')
      }
    } catch (error) {
      showError(error)
    }

    try {
      if (values.password !== values.confirm_password) {
          throw new Error('Паролите не съвпадат.');
      }
  } catch (error) {
    
     showError(error);
  }

  try {
    const result = await authService.register(values.email,values.password,values.username);

    console.log(`The result is : ${result.username}`)
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate('/');
  } catch (error) {
    showError(error)
  }

    
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
    userId : auth._id
  

  }
 
  return (
    <AuthContext.Provider value={values}>
    <div id="page">
     <Navigation />
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/places' element = { <PlacesList />} />
      <Route path='/places/:id' element = {<PlaceDetails />} />
      <Route path='/places/:id/edit' element = {<PlaceEdit />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/about' element ={<About />} />

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
