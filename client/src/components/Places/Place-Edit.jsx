import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { edit, getOne } from "../../services/placeService";
import { useState } from "react";
import showError from "../../lib/errorUtil";

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
    try {
        if(!placeData.name || !placeData.location || !placeData.imgUrl || !placeData.description){
            throw new Error('All fields are required')
          }
          const result = await edit(id,placeData);
          navigate(`/places/${id}`);
    } catch (error) {
        showError(error)
    }
  

}

const onChange = (e)=>{

    setPlace(state =>({
        ...state,
        [e.target.name] : e.target.value
    }))
};
    return(
        <section>
        <h1>
          
            <center>Коригирай обект </center>
            </h1>
        <form onSubmit={editPlace}>
          <label htmlFor="name">Име:</label>
          <input type="text" value ={place.name} id="name" name="name" required="" onChange={onChange}/>
          <label htmlFor="location">Местоположение:</label>
          <input type="text" value = {place.location} id="location" name="location" required=""onChange={onChange} />
          <label htmlFor="description">Описание:</label>
          <input type="text" value={place.description} id="description" name="description" required=""onChange={onChange} />
         <label htmlFor="Снимка">Снимка:</label>
          <input type="imgUrl" value={place.imgUrl} id="imgUrl" name="imgUrl" required="" onChange={onChange} />
          <input type="submit"value="Запази промените" />
        </form>
        
              </section>
    )
}