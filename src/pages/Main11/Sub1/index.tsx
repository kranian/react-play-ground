import React, {useEffect} from 'react';
import {} from './styles';
import {useRecoilState} from "recoil";
import {loginState, menuState, pageNavi, pageTitle} from "@states/globalStates";

const Main11Sub1 = () => {
  const [ loginValue  , setLoginState ] = useRecoilState(loginState);
  const [ menuStateValue, setMenuState ] = useRecoilState(menuState);
  const [ pageTitleValue, setPageTitle ] = useRecoilState(pageTitle);
  const [ pageNaviValue, setPageNavi ] = useRecoilState(pageNavi);

  useEffect(() => {
    setMenuState('main11/sub1');
    setPageTitle('배치관리');
    setPageNavi('home > 배치관리시스템 > 배치관리');
  })

  return (
    <div className='bodyWrap'>main11/sub1</div>
  )
}

export default Main11Sub1;