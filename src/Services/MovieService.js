export const fetchMoviesApi = async (filter) => {
  const BASE_URL = 'https://api.themoviedb.org/3';
  const APIKEY = process.env.REACT_API_KEY
  const ACCESS_TOKEN = process.env.REACT_API_KEY_TOKEN;

  const getOptions = () => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  let endpoint = 'collection/collection_id/images';
  switch (filter) {
    case 'popular':
      endpoint = '/movie/popular';
      break;
    default:
      throw new Error('Invalid filter');
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, getOptions());
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
