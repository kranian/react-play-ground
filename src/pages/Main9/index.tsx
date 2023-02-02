import React, {useEffect} from 'react';
import {} from './styles';
import {useRecoilState} from "recoil";
import {loginState, menuState, pageNavi, pageTitle} from "@states/globalStates";

const Main9 = () => {

  const [ loginValue  , setLoginState ] = useRecoilState(loginState);
  const [ menuStateValue, setMenuState ] = useRecoilState(menuState);
  const [ pageTitleValue, setPageTitle ] = useRecoilState(pageTitle);
  const [ pageNaviValue, setPageNavi ] = useRecoilState(pageNavi);

  useEffect(() => {
    setMenuState('main9');
    setPageTitle('데이터표준관리');
    setPageNavi('home > 데이터표준관리');
  })

  return (
    <div className='bodyWrap'>Main9</div>
  )
}

export default Main9;