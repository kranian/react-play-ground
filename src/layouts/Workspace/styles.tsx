import styled from '@emotion/styled';
import { colors } from '@styles/colors';

export const WorkspaceWrap = styled.div`
  width: 100%; height:100%;
  display:flex; flex-direction: column;
`;

/***** 헤더 *****/
export const Header = styled.div`
  width : 100%; height : 73px; min-height:76px;
  background-color: ${colors.headerBG};
  display: flex; flex-direction: row; align-items: center;
`;

  export const Logo = styled.div`
    min-width: 156px; max-width: 156px; height:56px;
  `;


  /***** 메뉴부분 (가운데) *****/
  export const MenusContainer = styled.div`
    height:72%;
    display : flex; flex-direction: row; flex : 1; justify-content: flex-start;
    margin-top: 6px;
    padding-left : 40px;
  `;

  export const Menu = styled.div`
    position: relative;
    min-width:60px; max-width:140px; height : 52px;
    border-right : 1px solid ${colors.mainMemuLine};
    display : flex; flex-direction: column; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.5);
    padding : 0 15px;
    cursor: pointer;
    .menuText {
      font-size: 12px;
      opacity: 0.7;
      margin-top: 3px;
    }
    .selectBar {
      position: absolute; bottom: -8px; left:0;
      width: 100%; height:4px;
      background: #59c6f2;
      display:none;
    }
    
    &:hover, &.selected {
      color : #ffffff;
  
      .selectBar {
        display:block;
      }
    }
    
    @media (max-width: 1410px) {
      .menuText {
        display : none;
      }
    }
  `;

  /***** 로그아웃 (오른쪽) *****/
  export const HeaderRight = styled.div`
    display : flex; justify-content: center; align-items: center;
    min-width: 160px; max-width:160px; height:100%;
    color: rgba(255,255,255,0.6);
    cursor: pointer;
    & > svg {
      width: 19px;
      margin-right : 5px;
    }
    &:hover {
      color: #fff;
    }
  `;

  /***** 서브메뉴 부분 *****/
  export const SubmenuContainer = styled.div`
    position: absolute; top:73px;left:0; z-index: 10;
    width:100%; height : 73px;
    background: ${colors.submenuBG};
    box-shadow: inset 0 1px 6px #000;
    display: flex; justify-content: center; align-items: center;
  `;


/***** body *****/
export const BodyContainer = styled.div`
  display : flex; flex : 1; flex-direction: column;
  //overflow-y: auto;
  padding : 10px 41px 0 41px;
  background-color: ${colors.bodyBase};
  box-shadow: inset 0 1px 5px 1px rgb(0 0 0 / 30%);
  & .bodyWrap {
    width: 100%;
  }
`;

  export const PageTitle = styled.div`
    width: 100%; height : 60px;
    display : flex; flex-direction: row; align-items: center;
    border-bottom: 1px solid ${colors.baseLine};
    position: relative;
    .pageTitleText {
      font-size : 22px; font-weight: bold; color : ${colors.pageTitle}; letter-spacing: 2px;
      display : flex; flex : 1;
    }
    .pageNavi {
      display : flex; justify-self: flex-end; align-items: center; 
      height:100%;
      color : ${colors.textBase};
      
      & svg {
        width: 14px;
        margin-right: 4px;
      }
    }
  `;

  export const BodyContents = styled.div`
    width : 100%; height : 100%;
    padding : 10px 0;
  `;


/***** footer *****/
export const Footer = styled.div`
  display : flex; flex-direction: column; justify-content: center; align-items: center;
  width : 100%; height : 80px;
  background-color : ${colors.footerBG};
  font-size: 13px; color : rgba(255,255,255,0.5); text-align: center;
`;
