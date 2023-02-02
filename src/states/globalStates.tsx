import { atom } from 'recoil';

/***** 로그인 여부 확인 *****/
export const loginState = atom({
  key : 'loginState',
  default : true
});

/***** url 주소가 들어감 *****/
export const menuState = atom({
  key : 'menuState',
  default : ''
});


/***** 페이지 타이틀 *****/
export const pageTitle = atom({
  key : 'pageTitle',
  default : ''
});

/***** 페이지 네비게이션 *****/
export const pageNavi = atom({
  key : 'pageNavi',
  default : ''
});