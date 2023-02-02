import styled from '@emotion/styled';

export const LoginBG = styled.div`
  width : 100%; height: 100%;
  overflow: hidden;
  .img-center {
    overflow: hidden;
    background-color : #070e27;
    display: flex; align-items: center; justify-content: center;
    width:100vw; height:100vh;
  }
  img {
    max-width: 170%; max-height: 170%; min-width: 2000px; width:120%;
  }
`;

export const LoginModal = styled.div`
  position : absolute; top : 0; left : 0; 
  width:100%; height : 100%;
  display:flex; justify-content: center; align-items: center;

  .modalCard {
    position: relative;
    width : 665px; height : 450px;
    background: #fff;
    border-radius: 10px;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    box-shadow: 8px 17px 13px 4px rgb(0 0 0 / 63%);

    .logoImg {
      width: 100%;
      height: 115px;
      background-image: url('/assets/images/login_logo.png');
      background-repeat: no-repeat;
      background-position-x: left;
    }
    
    .login_form_container {
      width:54%;
      margin-top : 37px;
      
      .loginCardDesc {
        margin-top : 22px;
        font-size : 13px; color : #555555;
      }
    }
  }
`