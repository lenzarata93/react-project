import showError from "../lib/errorUtil";
import * as request from "../lib/requester";

const baseUrl = `http://localhost:3030/data/places`;

export const getAll = async() => {
    const result=await request.get(baseUrl);
    return Object.values(result);



};




export const create= async(placeData) =>{
  try {
    const result = await request.post(baseUrl,placeData);
    return result;
  } catch (error) {
    showError(error);
  }

};
export const getOne = async (placeId) => {
  try {
    const result = await request.get(`${baseUrl}/${placeId}`);
    console.log(`in getOne result is : ${Object.values(result)}`)

    return result;
  } catch (error) {
    showError(error)
  }
  
};
export const edit= async(id,placeData) =>{
  try {
    const result = await request.put(`${baseUrl}/${id}`,placeData);
    return result;
  } catch (error) {
    showError(error)
  }
 
  };
  export const del =async (id) =>{
    try {
      const result =await  request.del(`${baseUrl}/${id}`);
    } catch (error) {
      showError(error)
    }
  
  }

