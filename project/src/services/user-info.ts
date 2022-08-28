import { USER_INFO_KEY_NAME } from '../constants/api';
import { UserInfo } from '../types/types';

export const getUserInfo = (): UserInfo => {
  const userInfo = localStorage.getItem(USER_INFO_KEY_NAME);
  return userInfo ? JSON.parse(userInfo) : null;
};

export const saveUserInfo = (userInfo: UserInfo): void => {
  localStorage.setItem(USER_INFO_KEY_NAME, JSON.stringify(userInfo));
};

export const dropUserInfo = (): void => {
  localStorage.removeItem(USER_INFO_KEY_NAME);
};
