import React, {useEffect} from 'react';
import {} from './styles';
import {useRecoilState} from "recoil";
import {loginState, menuState, pageNavi, pageTitle} from "@states/globalStates";

const Main11Sub3 = () => {
  const [ loginValue  , setLoginState ] = useRecoilState(loginState);
  const [ menuStateValue, setMenuState ] = useRecoilState(menuState);
  const [ pageTitleValue, setPageTitle ] = useRecoilState(pageTitle);
  const [ pageNaviValue, setPageNavi ] = useRecoilState(pageNavi);

  useEffect(() => {
    setMenuState('main11/sub3');
    setPageTitle('배치스케줄실행결과');
    setPageNavi('home > 배치관리시스템 > 배치스케줄실행결과');
  })

  return (
    <div className='bodyWrap'>main11/sub3</div>
  )
}

export default Main11Sub3;