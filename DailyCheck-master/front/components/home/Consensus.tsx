import styled from 'styled-components';

export default function Consensus() {
  return (
    <Section className="ConsensusSection">
      <div className="TitleDiv">
        <div className="Title">컨센서스 기반 이슈 기업</div>
        <div className="More">더보기</div>
      </div>
      <div className="ConsensusDiv">
        <button className="ConsensusButton">컨센서스 상향</button>
        <button className="ConsensusButton">컨센서스 하향</button>
        <button className="ConsensusButton">목표주가 상향</button>
        <button className="ConsensusButton">목표주가 하향</button>
      </div>
      <div className="ConsensusList">
        <div className="ConsensusItem">Consensus1</div>
        <div className="ConsensusItem">Consensus2</div>
        <div className="ConsensusItem">Consensus3</div>
        <div className="ConsensusItem">Consensus4</div>
        <div className="ConsensusItem">Consensus5</div>
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
  .ConsensusDiv {
    display: flex;
    flex-direction: row;
  }
  .ConsensusButton {
    border-radius: 4px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 8px 12px;
    color: #fff;
    background-color: #1890ff;
  }
  .ConsensusList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin: 10px 0;
  }
  .ConsensusItem {
    border: 1px solid #f0f3fa;
    border-radius: 4px;
    min-width: 200px;
    min-height: 100px;
    padding: 16px;
    display: flex;
  }
`;
