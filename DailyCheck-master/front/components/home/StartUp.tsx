import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import startUp from 'lib/startUp.json';

export default function StartUp() {
  // TODO. 임시로 json 파일 생성 후 사용 추후에는 aws 이용해서 하루마다 데이터 불러오기
  const [data, setData] = useState(startUp);
  // useEffect(() => {
  //   async function fetchAndSetUser() {
  //     try {
  //       const response = await axios.get('/api/startUp');
  //       setData(response.data.response.body.items.item);
  //       console.log(response.data.response.body.items.item);
  //       console.log(response.data.response.body.items.item[0].biztitle);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchAndSetUser();
  // }, []);
  const settings = {
    dots: true,
    // infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
  };
  return (
    <Section className="StartUpSection">
      <div>
        <div className="Title">모집중</div>
        <div className="Subject">예비 창업자와 창업기업을 위한 창업지원사업공고를 확인하실 수 있습니다.</div>
        <Slider {...settings}>
          {data &&
            data.map((item, index) => {
              return (
                <div className="ItemCard" key={index}>
                  <a href={item.detailurl} target="_blank">
                    <div className="CardDiv">
                      <div className="CardHeaderDiv">
                        <span className="SupportType">{item.supporttype}</span>
                        <span className="Enddate">마감일자 {item.enddate}</span>
                      </div>
                      <div className="CardMainDiv">{item.title}</div>
                      <div className="CardFooterDiv">
                        <span>{item.biztitle}</span>
                        <span>{item.organizationname}</span>
                        <span>{item.viewcount}</span>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
        </Slider>
      </div>
    </Section>
  );
}

const Section = styled.section`
  max-width: 1240px;
  padding: 30px;
  margin: 0px auto;
  .Title {
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .Subject {
    font-size: 18px;
    font-weight: 500;
    color: #6c6c6c;
    padding-bottom: 20px;
    letter-spacing: -0.06em;
    border-bottom: 1px solid #828282;
  }
  .StartUpWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .StartItem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .ItemCard {
    height: 200px;
    padding: 10px;
  }
  .CardDiv {
    border-radius: 20px;
    background: #f7f7f7;
    border: 1px solid #c5c5c5;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .CardHeaderDiv {
    margin: 10px 0;
    height: 45px;
    padding: 10px 15px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .CardMainDiv {
    padding: 10px 15px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.04em;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    height: 100%;
  }
  .CardFooterDiv {
    padding: 10px 15px;
    font-size: 14px;
  }
  .SupportType {
    border: 1px solid #e14222;
    padding: 5px;
    background: white;
    color: #e64a2a;
  }
  .Enddate {
    font-weight: bold;
  }
`;
