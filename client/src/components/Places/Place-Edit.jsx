import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { edit, getOne } from "../../services/placeService";
import { useState } from "react";

export default function PlaceEdit(){
    const navigate  = useNavigate()
const {id} =useParams();
console.log(`ID is ${id}`)
const [place,setPlace] = useState({});
useEffect(()=>{
    const place= getOne(id)
    .then(res=>setPlace(res));
    
},{});

const editPlace = async (e)=>{
    
    e.preventDefault();
    const placeData = Object.fromEntries(new FormData(e.currentTarget));
    const result = await edit(id,placeData);
    navigate(`/places/${id}`);

}

console.log(place)
    return(
        <section>
        <h1>
          
            <center>Коригирай обект </center>
            </h1>
        <form onSubmit={editPlace}>
          <label htmlFor="name">Име:</label>
          <input type="text" value ={place.name} id="name" name="name" required="" onChange={(e) => setPlace({ ...place, name: e.target.value })}/>
          <label htmlFor="location">Местоположение:</label>
          <input type="text" value = {place.location} id="location" name="location" required=""onChange={(e) => setPlace({ ...place, location: e.target.value })} />
          <label htmlFor="description">Описание:</label>
          <input type="text" value={place.description} id="description" name="description" required=""onChange={(e) => setPlace({ ...place, description: e.target.value })} />
         <label htmlFor="Снимка">Снимка:</label>
          <input type="imgUrl" value={place.imgUrl} id="imgUrl" name="imgUrl" required="" onChange={(e) => setPlace({ ...place, imgUrl: e.target.value })} />
          <input type="submit"value="Запази промените" />
        </form>
        
              </section>
    )
}