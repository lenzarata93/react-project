import { useEffect } from "react";
import { useParams } from "react-router-dom"
import * as placeService from '../../services/placeService'
import { useState } from "react";

export default function PlaceDetails(){
    const [place,setPlace] = useState({});

    const {placeId} = useParams();
useEffect(()=>{
placeService.getOne(placeId)
    .then(setPlace);
}, [placeId]);
console.log(place);
return (
    <div className="details-container">
    <h1>{place.name}</h1>
    <img src="PIC" alt=" Image"/>
    <p>Opisanie </p>
    <p><strong>Местоположение:</strong> LOKACIQ</p>
</div>
)
};