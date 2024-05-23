const SetItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const SetItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};

const GetItem = (key) => {
  if (localStorage.getItem(key)) return JSON.parse(localStorage.getItem(key));
  return false;
};

const GetItemGeneric = (key) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return console.log(key + "in localStorage not found");
};

const RemoveItem = (key) => {
  if (GetItem(key) === false) return false;
  localStorage.removeItem(key);
};

const ClearStorage = () => {
  localStorage.clear();
};

export {
  SetItem,
  SetItemGeneric,
  GetItem,
  GetItemGeneric,
  RemoveItem,
  ClearStorage,
};
