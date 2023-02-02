import styled from '@emotion/styled';

import {colors} from "@styles/colors";
import {ContentsArea} from "@styles/globalStyles";

export const Wrap = styled.div`
  display : flex; flex-direction: row;
  height:100%;
`;

export const LeftArea = styled(ContentsArea)`
  width : 460px; height:100%;
  display : flex; flex-direction: column;
  overflow-y: auto;
  padding:20px;
`;

export const RightArea = styled(ContentsArea)`
  margin-left:10px;
  display:flex; flex : 1; flex-direction: column; justify-content: flex-start; align-items: center;
  padding : 28px;
`;

export const RightBtnArea = styled.div`
  width: 100%; height : 70px;
  display : flex; flex-direction: row; align-items: center; justify-content: flex-end;
  & > div {
    margin-left: 10px;
  }
`;