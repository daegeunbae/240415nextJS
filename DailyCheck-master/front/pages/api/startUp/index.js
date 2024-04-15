const app = require('express')();
const request = require('request');
// const converter = require('xml-js');
const { XMLParser } = require('fast-xml-parser');

app.get('/api/startUp', (req, response) => {
  const url = 'http://openapi.kised.or.kr/openapi/service/rest/ContentsService/getAnnouncementList?';
  const serviceKey = '7wBLp26vUkaDcY0jNArxs2YPO48VzTk2zTuhj2%2B9xjACQaxkFxQ%2F1sdyxhP%2BO6U0v4ipEvKlURhwTaNELVd6tg%3D%3D';
  const pageNo = 1;
  const numOfRows = 12;
  // const startDate = 20220101;
  // const endDate = 20220301;
  const queryParams = `${url}ServiceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`;
  request(
    {
      url: queryParams,
      method: 'GET',
    },
    function (error, res, body) {
      // console.log('Status', res.statusCode);
      // console.log('Headers', JSON.stringify(res.headers));
      console.log('Reponse received', body);
      const options = {
        ignoreAttributes: false,
      };
      const parser = new XMLParser(options);
      let jObj = parser.parse(body);
      // const xmlToJson = converter.xml2json(body, { compact: true, spaces: 4 });
      response.send(jObj);
    },
  );
});

module.exports = app;
