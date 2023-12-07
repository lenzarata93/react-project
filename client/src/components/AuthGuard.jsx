import { useContext } from "react"
import AuthContext from "./contexts/authContext"
import { Navigate } from "react-router-dom";
import Login from "./Users/User-Login";

    export default function AuthGuard (props){
        const {isAuth} = useContext(AuthContext);
        if (!isAuth){
            return <Navigate to={Login} />
        }
        return(
            <>
            {props.children}
            </>
            )
    }