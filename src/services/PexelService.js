import { createClient } from 'pexels';

// get the api key from our .env file since we don't want to make our key public
// initialize the Pexel client with the key
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

const searchImages = (query) => {
    // performs a search using the Pexel API.
    return client.photos.search(
        // only 12 photos per page since there is an hourly limit for free usage with Pexels API
        { query, per_page: 12 }).then(result => result.photos
    );
};

export default searchImages;
