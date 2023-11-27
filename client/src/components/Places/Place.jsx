import { Link } from "react-router-dom";

export default function Place({
    _id,
    imgUrl,
    name,
    description,
    location,
}){
return(
    <article className="article">
        <img  src={imgUrl}></img>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <p><Link to={`/places/${_id}`}>Повече за обекта</Link></p>
    </article>
)

};