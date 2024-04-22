// 本地缓存服务

const PREFIX = 'jkdev_user_';

// user
export const USER_TOKEN = `${PREFIX}token`;
export const USER_ID = `${PREFIX}ID`;

// 储存
export const set = (key, data) => {
  localStorage.setItem(key, data);
};

// 读取
export const get = (key) => localStorage.getItem(key);


export const getToken = () => localStorage.getItem(USER_TOKEN);
export const setToken = (data) => set(USER_TOKEN, data);

