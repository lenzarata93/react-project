import { Link } from "react-router-dom";
import styles from '../components/About.module.css'

export default function About(){
    return(
        <div className={styles.about}>
            <h2>
                Ние сме екип от ентусиасти, влюбени в красотата на България и нейното културно наследство. Нашата мисия е да създадем платформа, където хора от целия свят могат да споделят и откриват удивителни забележителности на тази прекрасна страна.

                Вдъхновени от нашите лични преживявания и страст към пътешествията, ние решихме да създадем това приложение, за да споделим с всички вас част от магията на България. Ние вярваме в силата на общността и във взаимното споделяне на удивителни моменти.

                Нашата работа не свършва тук - непрекъснато се стремим към разширение на приложението, въвеждане на нови функционалности и създаване на по-добър начин за общуване и споделяне на преживявания. Благодарим ви, че сте част от това пътешествие с нас!
            </h2>
            <h3>Имате идеи, които биха направили приложението ни още по-добро? </h3>
               <h4> Пишете ни: <Link to="mailto:lenzarata93@gmail.com">lenzarata93@gmail.com</Link></h4>
           
        </div>
    )
}
 