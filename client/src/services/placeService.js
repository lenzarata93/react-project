import * as request from "../lib/requester";

const baseUrl = `http://localhost:3030/data/places`;

export const getAll = async() => {
    const result=await request.get(baseUrl);
    return Object.values(result);



};




export const create= async(placeData) =>{
  const result = await request.post(baseUrl,placeData);
     return result;
};
export const getOne = async (placeId) => {
    const result = await request.get(`${baseUrl}/${placeId}`);
    console.log(`in getOne result is : ${Object.values(result)}`)

    return result;
};
export const edit= async(id,placeData) =>{
    const result = await request.put(`${baseUrl}/${id}`,placeData);
       return result;
  };
  export const del =async (id) =>{
    const result =await  request.del(`${baseUrl}/${id}`);
  }

