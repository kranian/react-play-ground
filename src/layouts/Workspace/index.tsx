import React, {useState} from 'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import loadable from '@loadable/component';
import {
  BodyContainer,
  BodyContents,
  Footer,
  Header,
  HeaderRight,
  Logo,
  Menu,
  MenusContainer,
  PageTitle,
  SubmenuContainer,
  WorkspaceWrap
} from './styles';
import {useRecoilState} from 'recoil';
import {loginState, menuState, pageNavi, pageTitle} from "@states/globalStates";

import {CheckSquare, FileCode, Grid3x3GapFill, HouseDoorFill, ListCheck} from '@emotion-icons/bootstrap';
import {BatchPrediction, ChatBubble, Logout, ManageAccounts, Schedule} from '@emotion-icons/material';

const Main1  = loadable(() => import('@pages/Main1'));



const Workspace = () => {

  const [ loginValue  , setLoginState ] = useRecoilState(loginState);
  const [ menuStateValue, setMenuState ] = useRecoilState(menuState);

  const [ subMenuState, setSubMenuState ] = useState(false);
  const [ subMenuKind, setSubMenuKind ] = useState('');
  const [ pageTitleValue, setPageTitle ] = useRecoilState(pageTitle);
  const [ pageNaviValue, setPageNavi ] = useRecoilState(pageNavi);


  const SubMenu11 = () => {

    return (
      <>
        <Link to={`/workspace/main11/sub1`} onClick={() => {setSubMenuState(false)} }>
          <Menu className={`${menuStateValue === 'main11/sub1' ? 'selected' : ''}`}><BatchPrediction/> <div className='menuText'>배치관리 </div> <div className='selectBar'> </div></Menu>
        </Link>

        <Link to={`/workspace/main11/sub2`} onClick={() => {setSubMenuState(false)} }>
          <Menu className={`${menuStateValue === 'main11/sub2' ? 'selected' : ''}`}><Schedule/> <div className='menuText'>배치스케쥴관리 </div> <div className='selectBar'> </div></Menu>
        </Link>

        <Link to={`/workspace/main11/sub3`} onClick={() => {setSubMenuState(false)} }>
          <Menu className={`${menuStateValue === 'main11/sub3' ? 'selected' : ''}`}><ListCheck/> <div className='menuText'>배치스케쥴실행결과 </div> <div className='selectBar'> </div></Menu>
        </Link>
      </>
    )
  }

  const chkSubMenu = (kind: string) => {
    switch(kind) {
      case 'main11':
        setSubMenuState(true);
        setSubMenuKind('main11');
        break;
      default :
        setSubMenuState(false);
        break;
    }
  }

  const logout = () => {
    setLoginState(false);
  }

  if(!loginValue) {
    return <Navigate to='/login' replace/>
  }


  return (
    <WorkspaceWrap>
      <Header>
        {/***** 왼쪽 *****/}
        <Logo> </Logo>

        {/****** 가운데 ******/}
        <MenusContainer>
          <Link to={`/workspace/main1`} onClick={ () => {chkSubMenu('main1')} }>
            <Menu className={`${menuStateValue === 'main1'  ? 'selected' : ''}`}><Grid3x3GapFill /> <div className='menuText'>메뉴관리       </div> <div className='selectBar'> </div></Menu>
          </Link>

          <Link to={`/workspace/main2`} onClick={ () => {chkSubMenu('main2')} }>
            <Menu className={`${menuStateValue === 'main2'  ? 'selected' : ''}`}><CheckSquare    /> <div className='menuText'>권한관리       </div> <div className='selectBar'> </div></Menu>
          </Link>

          <Link to={`/workspace/main4`} onClick={ () => {chkSubMenu('main4')} }>
            <Menu className={`${menuStateValue === 'main4'  ? 'selected' : ''}`}><FileCode       /> <div className='menuText'>공통코드관리   </div> <div className='selectBar'> </div></Menu>
          </Link>

          <Link to={`/workspace/main5`} onClick={ () => {chkSubMenu('main5')} }>
            <Menu className={`${menuStateValue === 'main5'  ? 'selected' : ''}`}><ManageAccounts /> <div className='menuText'>사용자관리     </div> <div className='selectBar'> </div></Menu>
          </Link>

          <Link to={`/workspace/main6`} onClick={ () => {chkSubMenu('main6')} }>
            <Menu className={`${menuStateValue === 'main6'  ? 'selected' : ''}`}><ChatBubble     /> <div className='menuText'>커뮤니티관리   </div> <div className='selectBar'> </div></Menu>
          </Link>


          <Menu onClick={ () => {chkSubMenu('main11')} } className={`${menuStateValue === 'main11/sub1' || menuStateValue === 'main11/sub2' || menuStateValue === 'main11/sub3' ? 'selected' : ''}`}><BatchPrediction/> <div className='menuText'>배치관리시스템 </div> <div className='selectBar'> </div></Menu>

        </MenusContainer>

        {/****** 오른쪽 ******/}
        <HeaderRight onClick={logout}><Logout/>로그아웃</HeaderRight>
      </Header>

      {/****** 서브메뉴 부분 ******/}
      {
        subMenuState && (
          <SubmenuContainer>
            {subMenuKind === 'main11' ? <SubMenu11 /> : ''}
          </SubmenuContainer>
        )
      }


      {/****** 바디 ******/}
      <BodyContainer>
        <PageTitle>
          <div className='pageTitleText'>{pageTitleValue}</div>
          <div className='pageNavi'><HouseDoorFill/>{pageNaviValue}</div>
        </PageTitle>

        <BodyContents>
          <Routes>
            <Route path='/workspace/main1'  element={<Main1/>} />
          </Routes>
        </BodyContents>

      </BodyContainer>

      {/****** 푸터 ******/}
      <Footer>
        (35242) TEMPLATE <br/>
        (c)  PR CITY. ALL RIGHTS RESERVED.
      </Footer>
    </WorkspaceWrap>
  )
}

export default Workspace;