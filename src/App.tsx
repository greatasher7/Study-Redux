import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setTitle, setInfo, IInfo, IState } from './Store';

// 아래에서 정의한 type을 적용한다.
function App(props: PropsFromRedux) {
  // redux 변화를 확인하기 위한 코드 (버튼을 누르면 redux state가 업데이트 되고, state가 렌더링된다.)
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    if (isTrue) {
      props.setTitle('진짜정보');
      props.setInfo({
        name: '김진짜',
        age: 25,
      });
      setIsTrue(false);
    } else {
      props.setTitle('가짜정보');
      props.setInfo({
        name: '김가짜',
        age: 2500000,
      });
      setIsTrue(true);
    }
  };

  return (
    <>
      <div>
        <h1>This is home component</h1>
        <button onClick={handleClick}>btn</button>
        <p>{props.title}</p>
        <p>{props.info.name}</p>
        <p>{props.info.age}</p>
      </div>
    </>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    title: state.title,
    info: state.info,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTitle: (data: string) => dispatch(setTitle(data)),
    setInfo: (data: IInfo) => dispatch(setInfo(data)),
  };
};

// react-redux connect
const connector = connect(mapStateToProps, mapDispatchToProps);

// components 의 파라미터로 들어갈 type (from redux state)
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App);
