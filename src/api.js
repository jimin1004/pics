import axios from 'axios'


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: process.env.REACT_APP_CLIENT_ID
        },
        params: {
            query: term,
        }
    }); // http request가 완료 될 때까지 기다리기

    return response.data.results;
}

export default searchImages;

