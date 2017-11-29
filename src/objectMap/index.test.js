import chai from 'chai'
import {ObjectMap} from './index';

describe('ObjectMap', () => {
  describe('register', () => {

    it('it should register fields', () => {
      const mapping1 = a => a.sourceObject.testField1;
      const mapping2 = a => a.sourceObject.testField2;


      const objectMap = new ObjectMap({mapper: null})
        .field('field1', mapping1)
        .field('field2', mapping2);

      chai.expect(objectMap.maps['field1']).to.not.be.undefined;
      chai.expect(objectMap.maps['field2']).to.not.be.undefined;
    });
  })
});
