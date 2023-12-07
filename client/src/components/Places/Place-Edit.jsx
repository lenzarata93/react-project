import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOne } from "../../services/placeService";
import { useState } from "react";

export default function PlaceEdit(){
const {id} =useParams();
console.log(`ID is ${id}`)
const [place,setPlace] = useState({});
useEffect(()=>{
    const place= getOne(id)
    .then(res=>setPlace(res));
    
},{});

console.log(place)
    return(
        <section>
        <h1>
          
            <center>Коригирай обект </center>
            </h1>
        <form >
          <label htmlFor="name">Име:</label>
          <input type="text" value ={place.name} id="name" name="name" required="" />
          <label htmlFor="location">Местоположение:</label>
          <input type="text" value = {place.location} id="location" name="location" required="" />
          <label htmlFor="description">Описание:</label>
          <input type="text" value={place.description} id="description" name="description" required="" />
         <label htmlFor="Снимка">Снимка:</label>
          <input type="imgUrl" value={place.imgUrl} id="imgUrl" name="imgUrl" required="" />
          <input type="submit"value="Запази промените" />
        </form>
        
              </section>
    )
}