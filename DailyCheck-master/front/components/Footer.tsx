import styled from 'styled-components';

export default function Footer() {
  return (
    <Section>
      <div className="Footer">
        <div className="FooterLogo">DAILY CHECK</div>
        <div className="FooterText">
          <div className="FooterDiv">
            <div>
              <span>대표 : 배대근 </span> | <span>사업자등록번호: 330-15-01622 </span> | <span>통신판매업신고번호 제 2021-서울구로-2018</span>
            </div>
            <div>서울특별시 구로구 우마길 16-21</div>
            <div>dailycheck@dailycheck.co.kr | 010-4590-4917</div>
            <div>개인정보관리자: 노태현 </div>
          </div>
        </div>
        <div className="FooterCopyright">COPYRIGHT © 2022 (주)데일리체크.All Rights Reserved.</div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .Footer {
    max-width: 1240px;
    margin: 0 auto;
    padding: 30px 0;
    border-top: 1px solid #e9edf5;
  }
  .FooterLogo {
    margin-bottom: 25px;
    font-size: 18px;
    font-weight: bold;
  }
  .FooterLogo {
  }
  .FooterText {
    display: grid;
    grid-template-rows: auto;
  }

  .FooterDiv {
    letter-spacing: 0.3px;
  }
  .FooterDiv > div {
    margin-bottom: 20px;
  }
  .FooterDiv span {
    cursor: pointer;
  }
  .FooterCopyright {
    letter-spacing: 0.5px;
    margin-top: 20px;
    text-align: end;
    font-size: 12px;
  }
`;
