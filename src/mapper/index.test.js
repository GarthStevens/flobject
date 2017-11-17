import chai from 'chai'
import {Mapper} from './index';

describe('Mapper', () => {
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
