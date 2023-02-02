import React, {useEffect} from 'react';
import {} from './styles';
import {useRecoilState} from "recoil";
import {loginState, menuState} from "@states/globalStates";

const Main11 = () => {

  const [ loginValue  , setLoginState ] = useRecoilState(loginState);
  const [ menuStateValue, setMenuState ] = useRecoilState(menuState);

  useEffect(() => {
    setMenuState('main11');
  })

  return (
    <div className='bodyWrap'>Main11</div>
  )
}

export default Main11;