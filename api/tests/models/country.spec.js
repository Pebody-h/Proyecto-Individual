const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('modelo de país', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se puede conectar a la base de datos:', err);
    }));
  describe('Validadores', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('nombre', () => {
      it('debería arrojar un error si el nombre es nulo', (done) => {
        Country.create({})
          .then(() => done(new Error('Requiere un nombre válido')))
          .catch(() => done());
      });
    });
  });
});
