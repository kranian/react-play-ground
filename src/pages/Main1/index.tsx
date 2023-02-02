import React, {useCallback, useEffect, useState} from 'react';
import axios, { AxiosResponse } from 'axios';
import {Wrap, LeftArea, RightArea, RightBtnArea} from './styles';
import {TableFlex, BtnBasic, BtnDel, Form_input_basic, Form_select, Label} from '@styles/globalStyles';


import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';
import {loginState, menuState, pageNavi, pageTitle} from "@states/globalStates";
import useInput from "@hooks/useInput";



interface RenderTree {
  menuId: string;
  menuNm: string;
  menuNo: string;
  url: string;
  upperMenuId: string;
  useYn:string;
  authorCode: string;
  children?: RenderTree[];
}

const testData: RenderTree = {
  menuId: 'root',
  menuNm: '최상위 메뉴',
  menuNo : '',
  url : '',
  upperMenuId : '',
  useYn : 'Y',
  authorCode : 'AUTH00008',
  children: [
    {
      menuId: '1',
      menuNm: '데이터 시각화',
      menuNo : '',
      url : '',
      upperMenuId : '',
      useYn : 'Y',
      authorCode : 'AUTH00008',
      children: [
        {
          menuId : '1-1',
          menuNm : '민간데이터',
          menuNo : '',
          url : '',
          upperMenuId : '',
          useYn : 'Y',
          authorCode : 'AUTH00008',
          children : [
            {
              menuId : '1-1-1',
              menuNm : '주차공유',
              menuNo : '',
              url : '',
              upperMenuId : '',
              useYn : 'Y',
              authorCode : 'AUTH00005',
            },
            {
              menuId : '1-1-2',
              menuNm : '미세먼지',
              menuNo : '',
              url : '',
              upperMenuId : '',
              useYn : 'Y',
              authorCode : 'AUTH00003',
            },
            {
              menuId : '1-1-3',
              menuNm : '화재예방',
              menuNo : '',
              url : '',
              upperMenuId : '',
              useYn : 'Y',
              authorCode : 'AUTH00008',
            },
            {
              menuId : '1-1-4',
              menuNm : '자율항행드론',
              menuNo : '',
              url : '',
              upperMenuId : '',
              useYn : 'N',
              authorCode : 'AUTH00008',
            },
          ]
        },
        {
          menuId: '1-2',
          menuNm: '공공데이터',
          menuNo: '',
          url: '',
          upperMenuId: '',
          useYn: 'N',
          authorCode : 'AUTH00008',
        },
        {
          menuId : '1-3',
          menuNm : '데이터분석',
          menuNo : '',
          url : '',
          upperMenuId : '',
          useYn : 'Y',
          authorCode : 'AUTH00008',
          children : [
            {
              menuId : '1-3-1',
              menuNm : '미세먼지연관분석',
              menuNo : '',
              url : '',
              upperMenuId : '',
              useYn : 'Y',
              authorCode : 'AUTH00008',
            },
          ]
        }
      ]
    },
    {
      menuId: '2',
      menuNm: '데이터셋',
      menuNo : '',
      url : '',
      upperMenuId : '',
      useYn : '',
      authorCode : 'AUTH00008',
      children: [
        {
          menuId: '2-1',
          menuNm: '민간데이터',
          menuNo : '',
          url : '',
          upperMenuId : '',
          useYn : 'Y',
          authorCode : 'AUTH00008',
        },
        {
          menuId: '2-2',
          menuNm: '공공데이터',
          menuNo : '',
          url : '',
          upperMenuId : '',
          useYn : 'Y',
          authorCode : 'AUTH00008',
        },
      ],
    },
  ],
};



const Main1 = () => {

  // const [ loginValue, setLoginState ] = useRecoilState(loginState);
  const [ menuStateValue, setMenuState ] = useRecoilState(menuState);
  const [ pageTitleValue, setPageTitle ] = useRecoilState(pageTitle);
  const [ pageNaviValue, setPageNavi ] = useRecoilState(pageNavi);

  const [ toggleAddLink, setToggleAddLink ] = useState(false);

  const [ menuName, onChangeMenuName, setMenuName ] = useInput('');
  const [ menuId, onChangeMenuId, setMenuId ] = useInput('');
  const [ menuOrder, onChangeMenuOrder, setMenuOrder ] = useInput('');
  const [ menuUrl, onChangeMenuUrl, setMenuUrl ] = useInput('');
  const [ parentId, onChangeParentId, setParentId ] = useInput('');
  const [ isUseValue, onChangeIsUse, setIsUse ] = useInput('N');
  const [ authKind, onChangeAuthKind, setAuthKind ] = useInput('');

  const [ treeDataValue, setTreeData ] = useState({
    menuId: '0',
    menuNm: '테스트',
    menuNo : '',
    url : '',
    upperMenuId : '',
    useYn : '',
    authorCode : ''
  });


  // const treeChart = async () => {
  //   const data = await axios
  //     .get(`/api/users`)
  //     .then((response: AxiosResponse<any>) => {
  //       setTreeData(testData);
  //     } )
  //     .catch((error) => {
  //       // console.error(error);
  //     })
  //     .finally(() => {
  //       // 현재는 API 가 없어 임시로 final에 넣어놈
  //       return testData;
  //     });
  //   return data.re
  // }
  //
  // treeChart().then(r => console.log(r));

  const treeChart = () => {

    axios
      .get(`/api/users`)
      .then((response: AxiosResponse<any>) => {
        setTreeData(testData);
      } )
      .catch((error) => {
        // console.error(error);
      })
      .finally(() => {
        // 현재는 API 가 없어 임시로 final에 넣어놈
        setTreeData(testData);
      });


    return 'test'
  }





  useEffect(() => {
    setMenuState('main1');
    setPageTitle('메뉴관리');
    setPageNavi('home > 메뉴관리');
  }, []);

  const initForm = () => {
    setMenuName('');
    setMenuId('');
    setMenuOrder('');
    setMenuUrl('');
    setParentId('');
    setIsUse('');
    setAuthKind('');
  };

  // Tree에서 선택한 값을 받아와서 페이지에있는 state 들에 저장해준다..
  const treeEvent = useCallback((treeData:any) => {

    setMenuName(treeData['menuNm']);
    setMenuId(treeData['menuId']);
    setMenuOrder(treeData['menuNo']);
    setMenuUrl(treeData['url']);
    setParentId(treeData['upperMenuId']);
    setIsUse(treeData['useYn']);
    setAuthKind(treeData['authorCode']);

    chkChildren(treeData);
    // console.log(treeData);
  }, []);

  const chkChildren = (treeData: RenderTree) => {
    // children이 있으면 하위메뉴추가 버튼 생성
    treeData.hasOwnProperty('children') ? setToggleAddLink(true) : setToggleAddLink(false);
  };

  /***
   * 하위메뉴 추가버튼 클릭
   * 임시 새 메뉴 추가
   *
  ***/
  const addLinkBtnClick = () => {
    initForm();

  };

  // 저장 버튼 클릭
  const saveBtnClick = () => {
    console.log('저장버튼');
  }

  // 삭제 버튼 클릭
  const delBtnClick = () => {
    console.log('삭제버튼');
  }

  return (
    <Wrap className='bodyWrap'>
      {/* 왼쪽 - 트리 */}
      <LeftArea>
        {/*<TreeViewer treeData = {treeDataValue()} parentEvent = {treeEvent} />*/}

        {/*{treeChart()}*/}
      </LeftArea>

      {/* 오른쪽 - 폼 */}
      <RightArea>
        {/* 테이블 부분 */}
        <TableFlex style={{width:'100%'}}>

          <table>
            <tbody>
              <tr><td className='th' style={{width : 200}}>메뉴명</td><td><Form_input_basic onChange={onChangeMenuName} value={menuName} /></td></tr>
              <tr><td className='th' style={{width : 200}}>메뉴 ID</td><td><Form_input_basic onChange={onChangeMenuId} value={menuId} disabled={true} /></td></tr>
              <tr><td className='th' style={{width : 200}}>메뉴 순서</td><td><Form_input_basic onChange={onChangeMenuOrder} value={menuOrder} /></td></tr>
              <tr><td className='th' style={{width : 200}}>url</td><td><Form_input_basic onChange={onChangeMenuUrl} value={menuUrl} /></td></tr>
              <tr><td className='th' style={{width : 200}}>상위메뉴 ID</td><td><Form_input_basic onChange={onChangeParentId} value={parentId} disabled={true} /></td></tr>
              <tr>
                <td className='th' style={{width : 200}}>사용여부</td>
                <td>
                  <div>
                    <Label htmlFor='useTrue' style={{marginRight : 10}}>
                      <input type='radio' name='isUse' value={'true'} id='useTrue' checked={isUseValue === 'Y'} onChange={() => { setIsUse('Y') }} />
                      사용
                    </Label>
                    <Label htmlFor='useFalse'>
                      <input type='radio' name='isUse' value={'false'} id='useFalse' checked={isUseValue === 'N'}  onChange={() => { setIsUse('N') }} />
                      사용안함
                    </Label>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='th' style={{width : 200}}>권한        </td>
                <td>
                  <Form_select name="authorCode" id="authorCode" style={{width: 130}} onChange={onChangeAuthKind} value={authKind} >
                    <option value="AUTH00003">관리자    </option>
                    <option value="AUTH00005">분석사용자</option>
                    <option value="AUTH00008">일반사용자</option>
                  </Form_select>
                </td>
              </tr>
            </tbody>
          </table>

        </TableFlex>

        {/* 버튼부분 */}
        <RightBtnArea>
          {toggleAddLink && ( <BtnBasic onClick={addLinkBtnClick}>하위메뉴추가</BtnBasic> )}
          <BtnBasic onClick={saveBtnClick}>저장</BtnBasic>
          <BtnDel   onClick={delBtnClick}>삭제</BtnDel>
        </RightBtnArea>
      </RightArea>
    </Wrap>
  )
}

export default Main1;