const supertest = require('supertest');
require('dotenv').config();

const api = supertest('https://skillacademy.com/');

export default (params) => api.get('skillacademy/discovery/search')
  .set('Content-Type', 'application/json')
  .query(params);