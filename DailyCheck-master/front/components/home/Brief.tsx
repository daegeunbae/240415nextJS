import styled from 'styled-components';

export default function Brief() {
  return (
    <Section className="BriefSection">
      <div className="TitleDiv">
        <div className="Title">딥서치 인사이트</div>
        <div className="More">더보기</div>
      </div>
      <div className="SubMessage">딥서치 회원은 매일 경제 전문가의 인사이트를 메일로 받아볼 수 있어요</div>
      <div className="BriefList">
        <div className="BriefItem">Brief1</div>
        <div className="BriefItem">Brief2</div>
        <div className="BriefItem">Brief3</div>
        <div className="BriefItem">Brief4</div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  max-width: 1240px;
  padding: 30px;
  margin: 0px auto;
  .TitleDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .Title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .More {
    cursor: pointer;
  }
  .SubMessage {
    font-size: 14px;
    color: #777e8c;
    margin-bottom: 15px;
  }

  .BriefList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 10px 0;
  }
  .BriefItem {
    border: 1px solid #f0f3fa;
    border-radius: 4px;
    min-width: 250px;
    min-height: 250px;
    padding: 16px;
    display: flex;
  }
`;
