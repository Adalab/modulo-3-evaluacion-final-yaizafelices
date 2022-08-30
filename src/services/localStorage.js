const get = (key, defaultValue) => {
    const dataLocalStorage = localStorage.getItem(key);
    if (dataLocalStorage === null) {
      return defaultValue;
    } else {
      return JSON.parse(dataLocalStorage);
    }
  };
  
  const set = (key, value) => {
    const dataLocalStorage = JSON.stringify(value);
    localStorage.setItem(key, dataLocalStorage);
  };

  const remove = (key) => {
    localStorage.removeItem(key);
  };
  
  const clear = () => {
    localStorage.clear();
  };
  
  const objToExport = {
    get: get,
    set: set,
    remove: remove,
    clear: clear,
  };
  
  export default objToExport;