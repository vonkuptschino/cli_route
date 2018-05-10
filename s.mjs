import express from 'express';
import portfinder from 'portfinder';

const html = { 'Content-Type': 'text/html; charset=utf-8' };
const json = { 'Content-Type': 'application/json; charset=utf-8' };
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
};
const app = express();
app
  .use(express.static('docs'))
  .get('/author', r => r.res.set({ ...html, ...CORS }).send('Алан Тьюринг'))
  .get('/env', r => r.res.set({ ...json, ...CORS }).send(process.env))
  .get('/url1', r => r.res.send(r.url))
  .get('/url2', r => r.res.send(r.baseUrl))
  .get('/url3', r => r.res.send(r.originalUrl))
  .get('/*', r => r.res.sendFile('docs/index.html', { root: '.' }))
  .use(r => r.res.status(404).end('Still not here, sorry!'))
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`));

portfinder.getPortPromise()
  .then((PORT) => {
    app.set('PORT', process.env.PORT || PORT);
    app.listen(app.get('PORT'), () => console.log(app.get('PORT')));
  })
  .catch((err) => {
    console.error(err);
  });