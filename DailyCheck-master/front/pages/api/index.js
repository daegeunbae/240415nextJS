const app = require('express')();
const request = require('request');

app.get('/api', (req, response) => {
  const url = 'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?';
  const serviceKey = 'xQCCQbRs9DHnPxapQ4ZFGo76270NgApqvJccCH8aZvgou6j%2FkBPzYcrOMZmvxC1xv0u9xBeV%2B9hHqzEsWExRdA%3D%3D';
  const returnType = 'json';
  const numOfRows = 1;
  const pageNo = 1;
  const itemCode = 'PM10';
  const dataGubun = 'HOUR';
  const searchCondition = 'WEEK';
  const queryParams = `${url}ServiceKey=${serviceKey}&returnType=${returnType}&numOfRows=${numOfRows}&pageNo=${pageNo}&itemCode=${itemCode}&dataGubun=${dataGubun}&searchCondition=${searchCondition}`;
  // const url =
  //   'http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?serviceKey=xQCCQbRs9DHnPxapQ4ZFGo76270NgApqvJccCH8aZvgou6j%2FkBPzYcrOMZmvxC1xv0u9xBeV%2B9hHqzEsWExRdA%3D%3D&returnType=json&numOfRows=1&pageNo=1&itemCode=PM10&dataGubun=HOUR&searchCondition=WEEK';
  request(
    {
      url: queryParams,
      method: 'GET',
    },
    function (error, res, body) {
      // console.log('Status', res.statusCode);
      // console.log('Headers', JSON.stringify(res.headers));
      // console.log('Reponse received', body);
      response.end(body);
    },
  );
});

module.exports = app;
