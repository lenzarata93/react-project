import { useEffect } from "react";
import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export default function Logout (){
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext)
useEffect(()=>{
authService.logout()
.then(()=>logoutHandler())
.catch(()=>navigate('/'))
},[]);
return null;
};