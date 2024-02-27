
import axios from 'axios';

const searchImage = async (searchQuery) => {
    const response = await axios({
      method: 'get',
      url: 'https://api.unsplash.com/search/photos',
      headers: {
        Authorization: 'Client-ID fePjZ9gR2nGvvz5zBYygsfIF4Y2HBPLp0QJaxfTBZB4',
      },
      params: {
        query: searchQuery
      }


    });
    return response.data.results;

  }

  export default searchImage;