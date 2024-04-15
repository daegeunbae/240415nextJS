import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AirSpan from 'components/AirSpan';

export default function AirPollution() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const response = await axios.get('/api');
        setData(response.data.response.body.items[0]);
        // console.log(Object.values(response.data.response.body.items[0]));
        // console.log(response.data.response.body.items[0]['busan']);
        // console.log(response.data.response.body.items[0]);
        //
        // busan: '37';
        // chungbuk: '47';
        // chungnam: '49';
        // daegu: '35';
        // daejeon: '41';
        // dataGubun: '1';
        // dataTime: '2022-03-07 20:00';
        // gangwon: '55';
        // gwangju: '27';
        // gyeongbuk: '43';
        // gyeonggi: '48';
        // gyeongnam: '33';
        // incheon: '34';
        // itemCode: 'PM10';
        // jeju: '26';
        // jeonbuk: '34';
        // jeonnam: '27';
        // sejong: '44';
        // seoul: '48';
        // ulsan: '40';
      } catch (e) {
        console.log(e);
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <Section className="AirPollutionSection">
      <div className="AirPollutionHeader">
        <div className="Title">미세먼지 대기오염</div>
        <div className="Time">{data['dataTime']} 기준</div>
        <div className="SubMessage">한국환경공단제공</div>
      </div>
      <div className="AirPollutionInfoWrap">
        <div className="AirPollutionInfoListWrap">
          <div>
            <div className="AirPollutionInfoHeader">
              <span className="AirPollutionInfoHeaderText">관측지점</span>
              <span className="AirPollutionInfoHeaderText">측정값</span>
              <span className="AirPollutionInfoHeaderText">농도범위</span>
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">서울</span>
              <span className="AirPollutionInfoContentText">{data['seoul']}</span>
              <AirSpan data={data['seoul']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">대구</span>
              <span className="AirPollutionInfoContentText">{data['daegu']}</span>
              <AirSpan data={data['daegu']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">광주</span>
              <span className="AirPollutionInfoContentText">{data['gwangju']}</span>
              <AirSpan data={data['gwangju']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">울산</span>
              <span className="AirPollutionInfoContentText">{data['ulsan']}</span>
              <AirSpan data={data['ulsan']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">제주</span>
              <span className="AirPollutionInfoContentText">{data['jeju']}</span>
              <AirSpan data={data['jeju']} />
            </div>
          </div>
          <div>
            <div className="AirPollutionInfoHeader">
              <span className="AirPollutionInfoHeaderText">관측지점</span>
              <span className="AirPollutionInfoHeaderText">측정값</span>
              <span className="AirPollutionInfoHeaderText">농도범위</span>
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">부산</span>
              <span className="AirPollutionInfoContentText">{data['busan']}</span>
              <AirSpan data={data['busan']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">인천</span>
              <span className="AirPollutionInfoContentText">{data['incheon']}</span>
              <AirSpan data={data['incheon']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">대전</span>
              <span className="AirPollutionInfoContentText">{data['daejeon']}</span>
              <AirSpan data={data['daejeon']} />
            </div>
            <div className="AirPollutionInfoContent">
              <span className="AirPollutionInfoContentText">세종</span>
              <span className="AirPollutionInfoContentText">{data['sejong']}</span>
              <AirSpan data={data['sejong']} />
            </div>
          </div>
        </div>
      </div>
      <div className="SubMessage">"데이터는 실시간 관측된 자료이며 측정소 현지 사정이나 데이터의 수신상태에 따라 미수신 될 수 있음"</div>
    </Section>
  );
}
const Section = styled.section`
  max-width: 1240px;
  padding: 30px;
  margin: 0px auto;
  .AirPollutionHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .Title {
    font-size: 18px;
    font-weight: bold;
  }
  .Time {
    color: #00a1a3;
    letter-spacing: -0.5px;
  }
  .SubMessage {
    font-size: 12px;
    color: #777e8c;
  }

  .AirPollutionWrap {
    display: flex;
    flex-direction: row;
  }
  .AirPollutionInfoWrap {
    display: inline-block;
    background: #e8f3f3;
    border-radius: 5px;
    margin: 10px 0;
  }
  .AirPollutionInfoListWrap {
    background: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  .AirPollutionInfoHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e8f3f3;
  }
  .AirPollutionInfoHeaderText {
    font-size: 16px;
    font-weight: 400;
  }
  .AirPollutionInfoContent {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    margin: 15px 0;
  }
`;
