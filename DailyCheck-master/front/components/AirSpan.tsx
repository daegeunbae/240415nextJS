import styled from 'styled-components';

interface props {
  data: number;
}

export default function AirSpan({ data }: props) {
  return (
    <AirPollutionInfoContentText className="AirPollutionInfoContentText">
      {data <= 30 ? (
        <div className="AirPollution1">좋음</div>
      ) : data <= 80 ? (
        <div className="AirPollution2">보통</div>
      ) : data <= 150 ? (
        <div className="AirPollution3">나쁨</div>
      ) : (
        <div className="AirPollution4">매우나쁨</div>
      )}
    </AirPollutionInfoContentText>
  );
}
const AirPollutionInfoContentText = styled.span`
  .AirPollution1 {
    color: #009d29;
  }
  .AirPollution2 {
    color: #005bb2;
  }
  .AirPollution3 {
    color: #ffc000;
  }
  .AirPollution4 {
    color: #ff0000;
  }
`;
