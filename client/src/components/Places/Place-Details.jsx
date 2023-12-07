import { useEffect } from "react";
import { useParams } from "react-router-dom"
import * as placeService from '../../services/placeService'
import { useState } from "react";
import styles from '../Places/Place-Details.module.css'
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

export default function PlaceDetails(){
    const {username , userId} = useContext(AuthContext);
    const [place,setPlace] = useState({});

    const {id} = useParams();
    console.log(id)
  
useEffect(()=>{
placeService.getOne(id)
    .then(setPlace);
}, [id]);
console.log(place);

const isOwner = userId===place._ownerId;
return (<>
    <h1>{place.name}</h1>
    <img className= "img" src={place.imgUrl} alt={place.name} />
    <p>{place.description}</p>
    <p><strong>Местоположение:</strong> {place.location}</p>

    {isOwner && (
   <div className={styles.divBtn}>
   <button className={styles.btn}>Промени</button>
   <button className={styles.btn}>Изтрий</button>
   </div>
    )}
 

    <div className={styles.addComment}>
        <textarea placeholder="Добави коментар"></textarea>
        <button onclick="addComment()">Добави</button>
    </div>

 
    <div>
        <h2>Коментари</h2>
        <ul>
 
        </ul>
        <p id="no-comments-message" >Все още няма коментари.</p>
    </div>

</>
)
};