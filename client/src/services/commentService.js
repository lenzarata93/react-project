import showError from '../lib/errorUtil';
import * as request from '../lib/requester'

const baseUrl = `http://localhost:3030/data/comments`;

export const createComment = async(placeId,username,comment)=>{
    try {
        const newComment = await request.post(`${baseUrl}`,{
            placeId,
            username, 
            comment
        });
        
        return newComment;
    } catch (error) {
        showError(error)
    }

};

export const getAll=async (id)=>{
    try {
        const result=await request.get(baseUrl);
const query = new URLSearchParams({
    where : `id="${id}"`
})
return Object.values(result).filter(comment => comment.placeId === id)
    } catch (error) {
        showError(error);
    }

};