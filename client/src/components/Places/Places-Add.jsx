import {create} from '../../services/createPlace'

export default function PlacesAdd(){
  const createPlace = async (e) =>{
    e.preventDefault();

    const placeData = Object.fromEntries(new FormData(e.currentTarget));
    //console.log(placeData);
    const result=await create(placeData);
    console.log(result)
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
  <input type="submit" defaultValue="Изпрати" />
</form>

      </section>


    )
};