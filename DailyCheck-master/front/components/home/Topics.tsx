import styled from 'styled-components';

export default function Topics() {
  return (
    <Section className="TopicsSection">
      <div className="TitleDiv">
        <div className="Title">트렌딩 토픽 기반 이슈 기업</div>
        <div className="More">더보기</div>
      </div>
      <div className="TopicList">
        <div className="TopicItem">Topic1</div>
        <div className="TopicItem">Topic2</div>
        <div className="TopicItem">Topic3</div>
        <div className="TopicItem">Topic4</div>
        <div className="TopicItem">Topic5</div>
        <div className="TopicItem">Topic6</div>
        <div className="TopicItem">Topic7</div>
        <div className="TopicItem">Topic8</div>
        <div className="TopicItem">Topic9</div>
        <div className="TopicItem">Topic10</div>
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
    margin-bottom: 30px;
  }
  .More {
    cursor: pointer;
  }
  .TopicList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin: 10px 0;
  }
  .TopicItem {
    border: 1px solid #f0f3fa;
    border-radius: 4px;
    position: relative;
    min-width: 200px;
    min-height: 100px;
    padding: 12px 16px;
  }
`;
