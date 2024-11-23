import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTZjODA2MmNlNTZhMjZmYzZmZGE3NmI2MWRjNDkyOSIsIm5iZiI6MTczMjAzNzI3Mi4zMzg5NzA0LCJzdWIiOiI2NzNjYzkyMTNiNDgwNDgxY2RkZGUyYWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TqzT1BFY_TBos5afyZk_45dyanXyEj383GQ89QH5KU0`,
  },
});

export default api;