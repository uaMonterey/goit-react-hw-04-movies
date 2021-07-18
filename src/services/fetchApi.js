import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDYzOTY5NDJiMTY5OWIzNzM2NzY2ODA4MmY0NzJhYSIsInN1YiI6IjYwZGFkNTQ3MTdjNDQzMDA3NGExNmMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ek-jFkicPWs9p5sfLCEyUoOQ62rtN2441Ym29P2BXv8';

// const getTrendingMovies = async () => {
//   const response = await axios.get('/trending/movie/day?');
//   return response.data.results
// };

async function getTrendingMovies() {
  const resp = await axios({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=046396942b1699b37367668082f472aa',
  });
  return resp;
}

function getMovieById(id) {
  return axios({
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=046396942b1699b37367668082f472aa`,
  });
}

function getMovieByQuery(query) {
  return axios({
    method: 'GET',
    url:
      'https://api.themoviedb.org/3/search/movie?api_key=046396942b1699b37367668082f472aa&query=' +
      query,
  });
}

function getCastInfo(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=046396942b1699b37367668082f472aa`,
  );
}

function getReviewsInfo(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=046396942b1699b37367668082f472aa`,
  );
}

export {
  getTrendingMovies,
  getMovieById,
  getMovieByQuery,
  getCastInfo,
  getReviewsInfo,
};
