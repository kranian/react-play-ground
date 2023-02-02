import styled from '@emotion/styled';
import {colors} from '@styles/colors';

/***** 레이아웃 관련 *****/
// 실제 컨텐츠 영역 기본
export const ContentsArea = styled.div`
  background-color: ${colors.contentsAreaBase};
  //border : 1px solid ${colors.baseLine};
  box-shadow: 0 0 9px rgb(0 0 0 / 10%);
`;



/***** 컨텐츠 내부 관련 *****/

/***** 폼 *****/
export const Form_input_basic = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  font-size: 15px;
  color: ${colors.fontColorDefault};
  border: 1px solid ${colors.inputLine};
  background-color: ${colors.inputBG};

  &[disabled] {
    background-color: ${colors.inputDisabledBG};
    border: ${colors.inputDisabledLine};
  }
`;

export const Form_input_login = styled(Form_input_basic)`
  width: 100%; height : 40px;
`;

export const Form_select = styled.select`
  height:30px;
  font-size : 15px; color : ${colors.fontColorDefault};
  border : 1px solid ${colors.inputLine};
  background-color: ${colors.inputBG};
`;

export const Form_submit = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  background-color: #0082cd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #0067a0;
  }
`;

export const Label = styled.label`
  font-size : 14px;
  display: flex; align-items: center;
  input {
    margin-right: 5px;
  }
`;

  /***** 버튼 *****/
export const BtnBasic = styled.div`
  height: 30px;
  font-size: 15px; color: #ffffff;
  background-color: ${colors.btnDefault};
  display: flex; justify-content: center; align-items: center;
  cursor: pointer;
  padding: 0 16px;
  border-radius: 5px;

  &:hover {
    background-color: ${colors.btnDefaultOver}
  }
`;

  // 추가/저장 버튼

  // 수정 버튼
  export const BtnModi = styled(BtnBasic)`
    background-color: ${colors.btnModi};
    &:hover {
      background-color: ${colors.btnModiOver}
    }
  `;

  // 삭제 버튼
  export const BtnDel = styled(BtnBasic)`
    background-color: ${colors.btnDel};
    &:hover {
      background-color: ${colors.btnDelOver}
    }
  `;

/***** 테이블 *****/
export const TableBasic = styled.div`
  
  table {
    width: 100%;
    border-top: 1px solid ${colors.tableStrongLine};
    border-bottom: 1px solid ${colors.tableStrongLine};
  }
   
  td {
    height: 55px;
    border-bottom: 1px solid ${colors.tableLine};
    padding : 0 8px;
    
    & > div {
      display : flex;
    }
  }
  
  .th, th {
    background-color: ${colors.tableTh};
    padding: 0 13px;
    font-size: 14px; font-weight: bold; color : ${colors.textBase}
  }
`;

export const TableFlex = styled(TableBasic)`
  display : flex; flex-direction: column; justify-content: center; align-items: center;
  
  & > div {
    display : flex;
  }
`;