import * as request from '../lib/requester'

const baseUrl = `http://localhost:3030/data/comments`;

export const createComment = async(placeId,username,comment)=>{
const newComment = await request.post(`${baseUrl}`,{
    placeId,
    username, 
    comment
});

return newComment;
}