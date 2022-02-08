import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  font-size: 36px;
  text-align: center;
`;

interface Params {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<Params>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();

  //기존에 api에서 {coinId}를 받아왔던 것과 달리
  //{state.name}을 화면에 뿌린다... 근데 어떤 장점때문에 이렇게 올리는거지???
  //이미  코인의 name을 가지고 있기때문에 api가 코인의 name을 줄때까지 기다릴 필요가 없다-> 더 빠르다.
  //state가 존재해야 상세페이지로 넘어가는거기때문에 상세페이지에서 메인페이지로 이동할 수 없다.
  return (
    <Container>
      <Header>
        <Title>{state?.name || "loading"}</Title>
      </Header>
      {loading ? <Loader>loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
