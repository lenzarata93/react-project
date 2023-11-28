import { useContext } from "react";
import useForm from "../hooks/useForm"
import AuthContext from "../contexts/authContext";

export default function Login(){

const {loginSubmitHandler} = useContext(AuthContext);
  const {values,onChange ,onSubmit} = useForm(loginSubmitHandler,{
  email : '',
  password : '',
});

    return(
<>
  <form onSubmit={onSubmit}>
    <label htmlFor="email">Email:</label>
    <input
    type="text"
    id="email"
    name="email"
    value={values.email}
    onChange={onChange}/>
    <br />
    <br />
    <label htmlFor="password">Парола:</label>
    <input
    type="password"
    id="password"
    name="password"
    value={values.password}
    onChange={onChange} />
    <br />
    <br />
    <input type="submit" defaultValue="Вход" />
  </form>
  <p>
    Все още нямаш регистрация? <a href="/register">Направи я сега</a>
  </p>
</>

    )
};