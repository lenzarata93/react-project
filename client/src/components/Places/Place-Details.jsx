import { useEffect } from "react";
import { useParams } from "react-router-dom"
import * as placeService from '../../services/placeService'
import { useState } from "react";

export default function PlaceDetails(){
    const [place,setPlace] = useState({});

    const placeId = useParams();
    const id = placeId.id;
    console.log(id)
useEffect(()=>{
placeService.getOne(id)
    .then(setPlace);
}, [id]);
console.log(place);
return (
    <div className="details-container">
    <h1>{place.name}</h1>
    <img src = {place.imgUrl} alt={place.name}/>
    <p>{place.description} </p>
    <p><strong>Местоположение:</strong> {place.location}</p>
</div>
)
};