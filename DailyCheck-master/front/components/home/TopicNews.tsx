import styled from 'styled-components';

export default function TopicNews() {
  return (
    <Section className="TopicNewsSection">
      <div className="Title">토픽</div>
      <div className="SubMessage">딥서치 토픽에서 오늘의 주요 이슈를 확인해보세요.</div>
      <div className="TopicNewsDiv">
        <button className="TopicNewsButton">뉴스</button>
        <button className="TopicNewsButton">주식정보</button>
        <button className="TopicNewsButton">스타트업이슈</button>
        <button className="TopicNewsButton">환경정보</button>
        <button className="TopicNewsButton">핫이슈 상품</button>
        <button className="TopicNewsButton">마케팅 트렌드</button>
        <button className="TopicNewsButton">공모전</button>
      </div>
      <div className="TopicNewsList">
        <div className="TopicNewsItem">News1</div>
        <div className="TopicNewsItem">News2</div>
        <div className="TopicNewsItem">News3</div>
        <div className="TopicNewsItem">News4</div>
        <div className="TopicNewsItem">News5</div>
        <div className="TopicNewsItem">News6</div>
        <div className="TopicNewsItem">News7</div>
        <div className="TopicNewsItem">News8</div>
        <div className="TopicNewsItem">News9</div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  max-width: 1240px;
  padding: 30px;
  margin: 0px auto;
  .Title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .SubMessage {
    font-size: 14px;
    color: #777e8c;
    margin-bottom: 15px;
  }
  .TopicNewsDiv {
    display: flex;
    flex-direction: row;
  }
  .TopicNewsButton {
    border-radius: 4px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 8px 12px;
    color: #fff;
    background-color: #1890ff;
  }
  .TopicNewsList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 10px 0;
  }
  .TopicNewsItem {
    border: 1px solid #f0f3fa;
    border-radius: 4px;
    min-width: 300px;
    min-height: 100px;
    padding: 16px;
    display: flex;
  }
`;
