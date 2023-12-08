import {create} from '../../services/placeService';
import {useNavigate} from 'react-router-dom';
import styles from './Places-Add.module.css'
import showError from '../../lib/errorUtil';

export default function PlacesAdd(){
  const navigate=useNavigate();
  const createPlace = async (e) =>{
    e.preventDefault();

    const placeData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      if(!placeData.name || !placeData.location || !placeData.imgUrl || !placeData.description){
        throw new Error('All fields are required')
      }
    const result=await create(placeData);
    console.log(result);
    navigate('/places');

      
    } catch (error) {
      showError(error)
    }
 

  }
    return (
      <section>
        <h1><center>Добави обект </center></h1>
<form onSubmit={createPlace}>
  <label htmlFor="name">Име:</label>
  <input type="text" id="name" name="name" required="" />
  <label htmlFor="location">Местоположение:</label>
  <input type="text" id="location" name="location" required="" />
  <label htmlFor="description">Описание:</label>
  <input type="text" id="description" name="description" required="" />
 <label htmlFor="Снимка">Снимка:</label>
  <input type="imgUrl" id="imgUrl" name="imgUrl" required="" />
  <input type="submit" value="Добави обект" />
</form>

      </section>


    )
};