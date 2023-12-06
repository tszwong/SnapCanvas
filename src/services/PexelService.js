import { createClient } from 'pexels';

// get the api key from our .env file since we don't want to make our key public
// initialize the Pexel client with the key
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

const searchImages = (query) => {
    // performs a search using the Pexel API.
    return client.photos.search(
        // need to decide how many photos to show each search
        { query, per_page: 12 }).then(result => result.photos
    );
};

export default searchImages;
