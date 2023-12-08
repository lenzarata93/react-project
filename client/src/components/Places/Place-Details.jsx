import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import * as placeService from '../../services/placeService'
import { useState } from "react";
import styles from '../Places/Place-Details.module.css'
import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import * as commentService from '../../services/commentService'
import Comments from "./Comments";

export default function PlaceDetails(){
    const {username , userId} = useContext(AuthContext);
    const [place,setPlace] = useState({});
    const[comments,setComments] = useState([]);

    const navigate = useNavigate();

    const {id} = useParams();
    console.log(id)
  
useEffect(()=>{
placeService.getOne(id)
    .then(setPlace);

    commentService.getAll(id)
    .then(setComments);
}, [id]);
console.log(place);

const isOwner = userId===place._ownerId;

const onDelete = async () =>{
const hasConfirmed = confirm(`Сигурен ли си,че искаш да изтриеш ${place.name}?`);
if(hasConfirmed){
    await placeService.del(id);
    navigate('/places')
    
}
};

const addComment =async (e) =>{
    e.preventDefault();
    const formData= new FormData(e.currentTarget)
    const comment = formData.get('comment')

const newComment= await commentService.createComment(id,username,comment);

setComments(state => [...state, newComment]);

}
return (<>
    <h1><center>{place.name}</center></h1>
    <img className= {styles.img} src={place.imgUrl} alt={place.name} />
    <p>{place.description}</p>
    <p><strong>Местоположение:</strong> {place.location}</p>

    {isOwner && (
  <div className={`${styles.divBtn} `}>
  <Link className={`${styles.btnEdit} `} to={`/places/${id}/edit`}>EDIT</Link>
  <button className={`${styles.btnEdit} `} onClick={onDelete}>DELETE</button>
</div>
    )}
 
{username && ( <div className={styles.addComment}>
        <form onSubmit={addComment}>
            <textarea name="comment" placeholder="Коментирай"></textarea>
            <input  type="submit" value='Коментирай'></input>
        </form>
    </div>)}
   

 
    <div>
        <h2>Коментари</h2>
        <ul>
            <div>
        {comments.map(comment => (
                <Comments {...comment}/>
            ))}
            </div>
        </ul>
        {comments.length === 0 &&(
            <p id="no-comments-message" >Все още няма коментари.</p>

        )}
    </div>

</>
)
};