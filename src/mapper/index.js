import {ObjectMap} from '../objectMap';

/*

*/
class Mapper {
  constructor(options) {
    this.maps = {};
    this.options = options || {

    };
  }

  register(name) {
    const map = new ObjectMap(this);

    this.maps = {
      ...this.maps,
      [name]: map
    };

    return map;
  }

  map(name, obj) {
    const map = this.maps[name];

    return map.map(obj);
  }
}

export default Mapper;
export {Mapper};
