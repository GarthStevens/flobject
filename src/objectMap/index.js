/**
 * Class representing a mapping from one object to another.
 */
class ObjectMap {

  /** Create an ObjectMap
   * @constructor
   * @param {Object} options
   */
  constructor(options) {
    this.mapper = options.mapper;
    this.maps = options.maps || {};
  }

  /**
   * Register a mapping between source and destination fields.
   * @param {string} destination - The property name that the source field will be mapped to.
   * @param {*} sourceMapping - A function that returns the value from the source field.
   */
  field(destination, sourceMapping) {
    this.maps[destination] = sourceMapping;

    return this;
  }

  /**
   * Map the object
   * @param {Object} obj - Object to map.
   */
  map(obj) {
    return Object.keys(this.maps)
      .reduce((prev, current) => ({
        ...prev,
        [current]: this.maps[current]({
          mapper: this.mapper,
          sourceObject: obj
        })
      }), {});
  }
}

export default ObjectMap;
export {ObjectMap};
