/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'COL',
  name: 'Colombia',
  flagImage: 'https://es.wikipedia.org/wiki/Colombia#/media/Archivo:Flag_of_Colombia.svg',
  continent: 'América del Sur',
  capital: 'Bogota',
};

describe('Rutas por países', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se puede conectar a la base de datos:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('debería obtener 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
