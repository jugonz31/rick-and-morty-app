import axios from 'axios';

export const request = async (requestStr) => {
    const res = await axios.get(requestStr)
    return {response: res.data}
    
}
