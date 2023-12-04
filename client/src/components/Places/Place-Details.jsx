import { useEffect } from "react";
import { useParams } from "react-router-dom"
import * as placeService from '../../services/placeService'
import { useState } from "react";
import styles from '../Places/Place-Details.module.css'

export default function PlaceDetails(){
    const [place,setPlace] = useState({});

    const {id} = useParams();
    console.log(id)
  
useEffect(()=>{
placeService.getOne(id)
    .then(setPlace);
}, [id]);
console.log(place);
return (<>
    <h1>{place.name}</h1>
    <img className= "img" src={place.imgUrl} alt={place.name} />
    <p>{place.description}</p>
    <p><strong>Местоположение:</strong> {place.location}</p>

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