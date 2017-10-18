export const save = (key, value) => {
  localStorage.ghost_admin_react = localStorage.ghost_admin_react || JSON.stringify({});
  var obj;
  try {
    obj = JSON.parse(localStorage.ghost_admin_react);
  } catch (e) {
    obj = {};
    localStorage.ghost_admin_react = JSON.stringify({});
  }
  obj[key] = value;
  localStorage.ghost_admin_react = JSON.stringify(obj);
}

export const get = (key) => {
  localStorage.ghost_admin_react = localStorage.ghost_admin_react || JSON.stringify({});
  var obj;
  try {
    obj = JSON.parse(localStorage.ghost_admin_react);
  } catch (e) {
    obj = {};
    localStorage.ghost_admin_react = JSON.stringify({});
  }
  return obj[key];
}

export const clear = () => {
  localStorage.ghost_admin_react = JSON.stringify({});
}
