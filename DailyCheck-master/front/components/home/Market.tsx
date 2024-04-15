import styled from 'styled-components';

export default function Market() {
  return (
    <Section className="MarketSection">
      <div className="TitleDiv">
        <div className="Title">시장 기반 이슈 기업</div>
        <div className="More">더보기</div>
      </div>
      <div className="MarketDiv">
        <button className="MarketButton">주가 급등</button>
        <button className="MarketButton">주가 급락</button>
        <button className="MarketButton">거래대금 급등</button>
        <button className="MarketButton">거래대금 급락</button>
        <button className="MarketButton">거래량 급등</button>
        <button className="MarketButton">거래량 급락</button>
        <button className="MarketButton">상한가</button>
        <button className="MarketButton">하한가</button>
        <button className="MarketButton">거래량 상위</button>
      </div>
      <div className="MarketList">
        <div className="MarketItem">Market1</div>
        <div className="MarketItem">Market2</div>
        <div className="MarketItem">Market3</div>
        <div className="MarketItem">Market4</div>
        <div className="MarketItem">Market5</div>
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
  .MarketDiv {
    display: flex;
    flex-direction: row;
  }
  .MarketButton {
    border-radius: 4px;
    margin-left: 4px;
    margin-right: 4px;
    padding: 8px 12px;
    color: #fff;
    background-color: #1890ff;
  }
  .MarketList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    margin: 10px 0;
  }
  .MarketItem {
    border: 1px solid #f0f3fa;
    border-radius: 4px;
    min-width: 200px;
    min-height: 100px;
    padding: 16px;
    display: flex;
  }
`;
