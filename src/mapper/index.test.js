import chai from 'chai'
import {Mapper} from './index';

describe('Mapper', () => {

  describe('constructor', () => {
    it('it should create a mapper with no mappings (no options)', () => {
      const mapper = new Mapper();
      const expected = {};
      const result = mapper.maps;

      chai.expect(result).to.deep.equals(expected);
    });

    it('it should create a mapper with no mappings (undefined options.map)', () => {

      const mapper = new Mapper({});
      const expected = {};
      const result = mapper.maps;

      chai.expect(result).to.deep.equals(expected);
    });

    it('it should create a mapper with no mappings (empty options.map)', () => {

      const maps = {

      };

      const mapper = new Mapper({maps});
      const expected = {};
      const result = mapper.maps;

      chai.expect(result).to.deep.equals(expected);
    });


    it('it should create a mapper with one mapping', () => {

      const maps = {
        person: {
          firstName: a => a.sourceObject.fields.firstName
        }
      };

      const mapper = new Mapper({maps});
      const expected = {
        person: {
          firstName: a => a.sourceObject.fields.firstName
        }
      };
      const result = mapper.maps;

      chai.expect(result).to.deep.equals(expected);
    });
  });

  describe('map', () => {
    it('it should map the object fields', () => {

      const mapper = new Mapper();

      const person = {
        firstname: 'Bill',
        lastname: 'Smith',
        job: {
          title: 'IT',
          roles: ['Dev', 'Admin', 'DevOps'],
          manager: {
            firstname: 'Sam',
            lastname: 'S',
          }
        }
      };

      const expected = {
        firstName: 'Bill',
        lastName: 'Smith'
      };

      mapper
        .register('person')
        .field('firstName', a => a.sourceObject.firstname)
        .field('lastName', a => a.sourceObject.lastname);
        // .field('career', a => a.mapper('job', a.sourceObject.job));

        console.log(mapper)//eslint-disable-line

      const result = mapper.map('person', person);

      chai.expect(result).to.deep.equals(expected);
      // chai.expect(objectMap.maps['field2']).to.not.be.undefined;
    });
  })
});
