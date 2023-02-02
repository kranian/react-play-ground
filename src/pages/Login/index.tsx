import React, {useCallback, useState} from 'react';
import useInput from '@hooks/useInput';
import {LoginBG, LoginModal} from './styles';
import {Form_input_login, Form_submit} from '@styles/globalStyles';
import {toast} from 'react-toastify';

import {useRecoilState} from 'recoil';
import {loginState} from '@states/globalStates';
import {Navigate} from "react-router-dom";

const Login = () => {
  const [ loginValue, setLoginState ] = useRecoilState(loginState);

  const [, setLogInError] = useState('');
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e:any) => {
      e.preventDefault();
      setLogInError('');

      if(id === '')       return toast.info('아이디를 입력해주세요');
      if(password === '') return toast.info('패스워드를 입력해주세요');

      // 추후 API 호출로 변경
      if(id === 'manager' && password === 'qwer1234!') {
        setLoginState(true);

      } else {
        return toast.info('로그인 정보가 다릅니다.');
      }
      // axios
      //   .post('/cmmn/actionLogin.do', {id, password}, {withCredentials: true})
      //   .then((response: AxiosResponse<any>) => {
      //     console.log('로그인됨');
      //   })
      //   .catch((error) => {
      //     console.log(error.response);
      //     // setLogInError(error.response.data);
      //   })
      //   .finally(() => {});
        
      

    },
    [id, password, setLoginState]
  );

  // 추후 swr로 로그인을 계속 확인하여 리다이렉트
  if(loginValue) {
    return <Navigate to='/workspace/main1' replace/>
  }


  return (
    <>
      <LoginBG>
        {/* 배경 */}
        <div className='img-center'>
        </div>

        {/* 모달 */}
        <LoginModal>
          <div className='modalCard'>
            {/*<div className='logoImg'> </div>*/}
            <div className='login_form_container'>
              <form onSubmit={onSubmit}>
                <Form_input_login type='text' id='id' name='id' value={id} onChange={onChangeId} placeholder='아이디를 입력하세요'/>
                <Form_input_login type='password' id='password' name='password' onChange={onChangePassword} placeholder='비밀번호를 입력하세요' style={{marginTop:7}} />
                <Form_submit type='submit' style={{marginTop:7}} value='로그인'/>
                <div className='loginCardDesc'>접속환경 : Microsoft Edge 및 Chrome에 최적화되었습니다.</div>
              </form>
            </div>
          </div>
        </LoginModal>
      </LoginBG>
    </>
  )
}

export default Login;