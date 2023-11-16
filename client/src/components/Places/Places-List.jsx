import { useEffect, useState } from 'react';
import * as placeServive from '../../services/placeService';
import styles from '../../components/Places/Places-List.module.css';
import Place from './Place';



export default function PlacesList(){
    const [places,setPlaces]=useState([]);
    useEffect(()=>{
       placeServive.getAll()
       .then(result =>setPlaces(result))


    },[]);

    console.log(places);


return(
<div className='places-container'>
{places.map(place =>(
    <Place key={place._id} {...place}/>
))}

{places.length ===0 && (
    <h4>No places yet..</h4>
)}
</div>



)
};