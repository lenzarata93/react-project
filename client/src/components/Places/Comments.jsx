export default function Comments({
    _id,
    username,
    comment
}){
    return (
      
                <li key={_id}>
                    <p>{username} : {comment}</p>
                </li>
            
    )
}