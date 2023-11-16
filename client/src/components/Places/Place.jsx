export default function Place({
    imgUrl,
    name,
    description,
    location,
}){
return(
    <article className="article">
        <img href="" src={imgUrl}></img>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <p><button>Повече за обекта</button></p>
    </article>
)

};