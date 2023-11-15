import styles from '../components/Navigation.module.css'
import {Link} from 'react-router-dom'

export default function Navigation(){
    return(
<nav>
  <ul>
  <Link to="/places"><img src="https://bulgaria-air.eu/images/logos/bulgaria-travel.png" alt="Лого"/></Link>

    <li><Link to="/">Начало</Link></li>
    <li><Link to="/places">Обекти</Link></li>
    <li><Link to="/places/add">Добави обект</Link></li>
    <li><Link to="/about">За нас</Link></li>
    <li><Link to="/registration">Регистрация</Link></li>
    <li><Link to="/login">Вход</Link></li>
    <li><Link to="/logout">Изход</Link></li>
  </ul>
</nav>

  

    )
};