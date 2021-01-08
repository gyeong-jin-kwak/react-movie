import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "357ad6a3e1369f05856eff3e04365942",
    language: "en-US"
  }
});

export default movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      append_to_response: 'videos'
    }
  }),
  search: term => api.get('search/movie', {
    params: {
      query: encodeURIComponent(term)
    }
  })
}

export default tvApi = {
  popular: () => api.get('tv/popular'),
  topRated: () => api.get('tv/top_rated'),
  airingToday: () => api.get('tv/airing_today'),
  tvDetail: id => api.get(`tv/${id}`, {
    params: {
      append_to_response: 'videos'
    }
  }),
  search: term => api.get('search/tv', {
    params: encodeURIComponent(term)
  })
}

// 확인용 개발자도구 - network
// api.get('movie/popular');
// export default api;