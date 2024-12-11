import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001/api' });

export const fetchLists = () => API.get('/lists');
export const createList = (newList) => API.post('/lists', newList);
export const fetchList = (id) => API.get(`/lists/${id}`);
export const fetchListItems = (id) => API.get(`/lists/${id}/items`);