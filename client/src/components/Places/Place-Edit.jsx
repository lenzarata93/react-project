export default function PlaceEdit(){

    return(
        <section>
        <h1>
          
            <center>Коригирай обект </center>
            </h1>
        <form >
          <label htmlFor="name">Име:</label>
          <input type="text" id="name" name="name" required="" />
          <label htmlFor="location">Местоположение:</label>
          <input type="text" id="location" name="location" required="" />
          <label htmlFor="description">Описание:</label>
          <input type="text" id="description" name="description" required="" />
         <label htmlFor="Снимка">Снимка:</label>
          <input type="imgUrl" id="imgUrl" name="imgUrl" required="" />
          <input type="submit" defaultValue="Запази промените" />
        </form>
        
              </section>
    )
}