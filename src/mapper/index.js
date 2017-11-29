import {ObjectMap} from '../objectMap';

/*

*/
class Mapper {
  constructor(options = {}) {
    this.options = {
      maps: options.maps || {}
    };

    this.maps = Object.keys(this.options.maps)
      .reduce((prev, current, arr) => new ObjectMap({
        mapper: this,
        maps: {
          ...prev,
          current: arr[current]}
      }), {});
  }

  register(name) {
    const map = new ObjectMap({
      mapper: this
    });

    this.maps[name] = map;

    return map;
  }

  map(name, obj) {
    const map = this.maps[name];

    return map.map(obj);
  }
}

export default Mapper;
export {Mapper};
