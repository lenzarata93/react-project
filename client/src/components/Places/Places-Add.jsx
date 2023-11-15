export default function PlacesAdd(){
    return (
<form action="/submit" method="post" encType="multipart/form-data">
  <label htmlFor="name">Име:</label>
  <input type="text" id="name" name="name" required="" />
  <br />
  <br />
  <label htmlFor="location">Местоположение:</label>
  <input type="text" id="location" name="location" required="" />
  <br />
  <br />
  <label htmlFor="description">Описание:</label>
  <br />
  <textarea
    id="description"
    name="description"
    rows={4}
    cols={50}
    required=""
    defaultValue={""}
  />
  <br>
  </br>
 <label htmlFor="location">Снимка:</label>
  <input type="imgUrl" id="imgUrl" name="imgUrl" required="" />
  <br />
  <input type="submit" defaultValue="Изпрати" />
</form>

    )
};