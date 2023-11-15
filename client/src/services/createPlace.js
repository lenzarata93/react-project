const baseUrl = `http://localhost:3030/jsonstore`

export const create= async(placeData) =>{
   const response= await fetch(`${baseUrl}/places`,{
        method: `POST`,
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify()
    });
    const result = await response.json();

    
    return result;
}