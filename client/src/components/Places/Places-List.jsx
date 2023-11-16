import { useEffect, useState } from 'react';
import * as placeServive from '../../services/placeService';
import styles from '../../components/Places/Places-List.module.css';



export default function PlacesList(){
    const [places,setPlaces]=useState([]);
    useEffect(()=>{
       placeServive.getAll()
       .then(result =>setPlaces(result))


    },[]);

    console.log(places);


return(
<div className='places-container'>


<article className="article">
<img href="" src="https://blog.luxury-discounts.com/wp-content/uploads/%D0%A8%D0%98%D0%9F%D0%9A%D0%90-1-1536x1106.jpg"></img>
<h2>Паметникът Шипка</h2>
<p>Описание</p>
<h2>Местоположение</h2>
</article>
</div>



)
};