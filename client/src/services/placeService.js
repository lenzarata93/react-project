import * as request from "../lib/requester";

const baseUrl = `http://localhost:3030/jsonstore/places`;

export const getAll = async() => {
    const result=await request.get(baseUrl);
    return Object.values(result);



};




export const create= async(placeData) =>{
  const result = await request.post(baseUrl,placeData);
     return result;
};

