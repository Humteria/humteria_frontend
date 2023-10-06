export async function setLocalStorageItem(key, value) {
  return new Promise((reject) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      reject(error);
    }
  });
}

export async function removeLocalStorageItem(key) {
  return new Promise((reject) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      reject(error);
    }
    location.reload(true);
  });
}
