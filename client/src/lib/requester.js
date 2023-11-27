const buildOptions = (data) =>{
const options = {};

if(data){
    options.body =JSON.stringify(data);
    options.headers = {
        'content-type' : 'application/json'
    };
}
return options;

}


const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    } 

    return result;
};

export const get = request.bind(null,'GET');
export const post = request.bind(null,'POST');
export const del = request.bind(null,'DELETE');
export const patch = request.bind(null,'PATCH');
export const put = request.bind(null,'PUT');
