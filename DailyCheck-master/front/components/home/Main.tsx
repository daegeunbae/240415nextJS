import styled from 'styled-components';

export default function Main() {
  return (
    <MainSection className="MainSection">
      <div className="MainText">당신의 시간 낭비하지마세요. 5분을 1분으로 줄이세요.</div>
      <div className="MainText2">실시간 인기 컨텐츠, 자료만 제공해드립니다.</div>
    </MainSection>
  );
}
const MainSection = styled.section`
  background-image: url('/main.jpg');
  width: 100vw;
  height: 20vh;
  background-size: cover;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .MainText {
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .MainText2 {
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
`;
