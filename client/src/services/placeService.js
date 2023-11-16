import { request } from "../lib/requester";

const baseUrl = `http://localhost:3030/jsonstore/places`;

export const getAll = async() => {
    const result=await request('GET',baseUrl);
    return Object.values(result);



};




export const create= async(placeData) =>{
   const response= await fetch(`${baseUrl}`,{
        method: `POST`,
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(placeData)
    });
    const result = await response.json();


    return result;
}