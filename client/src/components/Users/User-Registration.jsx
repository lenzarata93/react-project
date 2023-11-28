import { useContext } from "react"
import styles from "../Users/User-Registration.module.css"
import {Link} from "react-router-dom"
import AuthContext from "../contexts/authContext"
import useForm from "../hooks/useForm";

export default function Registration(){
const {registerSubmitHandler} = useContext(AuthContext);
const {values,onChange,onSubmit} = useForm(registerSubmitHandler,{
  username : '',
  email : '',
  password : '',
  confirm_password : ''
})

    return (
      <>
      <form onSubmit={onSubmit}>
  <label htmlFor="username">Потребителско име:</label>
  <input type="text"
  id="username"
  name="username"
  value={values.username}
  onChange={onChange} />
  <br />
  <br />
  <label htmlFor="email">Email:</label>
  <input type="email"
  id="email"
  name="email"
  value={values.email}
  onChange={onChange} />
  <br />
  <br />
  <label htmlFor="password">Парола:</label>
  <input type="password"
  id="password"
  name="password"
  value={values.password}
  onChange={onChange} />
  <br />
  <br />
  <label htmlFor="confirm_password">Повторете паролата:</label>
  <input
    type="password"
    id="confirm_password"
    name="confirm_password"
    value={values.confirm_password}
    onChange={onChange}
  />
  <br />
  <br />
  <input type="submit" defaultValue="Регистрация" />
  <p>
    Вече имаш регистрация? <Link to="/login">Влез</Link>
  </p>
</form>

      </>
        
    )
};