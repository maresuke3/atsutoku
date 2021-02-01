const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// データを取得する関数
async function getData(
  page,
  url,
  titleSelector,
  linkSelector,
  imgSelector,
  priceSelector
) {
  // コンソールイベントを登録(for only debugging)
  page.on('console', (msg) => {
    for (let i = 0; i < msg._args.length; ++i)
      console.log(`${i}: ${msg._args[i]}`);
  });
  await page.goto(url);

  return await page.evaluate(
    (titleSelector, linkSelector, imgSelector, priceSelector) => {
      //DOMから必要な要素を取得
      const getElm = (targetArray, targetElement, key) => {
        const result = [];
        targetArray.forEach((elm) => {
          let item = {
            [key]: elm[targetElement],
          };
          result.push(item);
        });
        return result;
      };
      //タイトル取得
      const titleList = document.querySelectorAll(titleSelector);
      const titles = getElm(titleList, 'textContent', 'title');

      //リンク取得
      const linkList = document.querySelectorAll(linkSelector);
      const links = getElm(linkList, 'href', 'link');
      //画像取得
      const imgList = document.querySelectorAll(imgSelector);
      const imgs = getElm(imgList, 'src', 'img');
      //価格取得
      const priceList = document.querySelectorAll(priceSelector);
      const prices = getElm(priceList, 'innerText', 'price');

      //タイトル配列とリンク配列,画像配列をマージ
      const data = [];
      for (let index = 0; index < titles.length; index++) {
        let item = {
          ...titles[index],
          ...links[index],
          ...imgs[index],
          ...prices[index],
        };
        data.push(item);
      }

      return data;
    },
    titleSelector,
    linkSelector,
    imgSelector,
    priceSelector
  );
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Uniqlo (MEN)
app.get('/api/uniqlo/men', (req, res) => {
  (async () => {
    const start = Date.now(); // 処理時間の計測用
    const browser = await puppeteer.launch({
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
      ],
    });
    const page = await browser.newPage();

    //不要なリソースを abort
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (
        [
          'texttrack',
          'xhr',
          'eventsource',
          'websocket',
          'manifest',
          'other',
          'media',
          'font',
        ].includes(request.resourceType())
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });

    const titleSelector = 'h3.uq-uikit-body';
    const anchorSelector = 'a.uq-uikit-tile';
    const imgSelector = '.uq-uikit-image > img';
    const priceSelector = '.uq-uikit-price-text';
    const url = 'https://www.uniqlo.com/jp/ja/feature/limited-offers/men';
    const newsArray = await getData(
      page,
      url,
      titleSelector,
      anchorSelector,
      imgSelector,
      priceSelector
    );

    await browser.close();

    await res.json(newsArray);
    console.log('Took', Date.now() - start, 'ms');
  })();
});

//Uniqlo (WOMEN)
app.get('/api/uniqlo/women', (req, res) => {
  (async () => {
    const start = Date.now(); // 処理時間の計測用
    const browser = await puppeteer.launch({
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
      ],
    });
    const page = await browser.newPage();

    //不要なリソースを abort
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (
        [
          'texttrack',
          'xhr',
          'eventsource',
          'websocket',
          'manifest',
          'other',
          'media',
          'font',
        ].includes(request.resourceType())
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });

    const titleSelector = 'h3.uq-uikit-body';
    const anchorSelector = 'a.uq-uikit-tile';
    const imgSelector = '.uq-uikit-image > img';
    const priceSelector = '.uq-uikit-price-text';
    const url = 'https://www.uniqlo.com/jp/ja/feature/limited-offers/women';
    const newsArray = await getData(
      page,
      url,
      titleSelector,
      anchorSelector,
      imgSelector,
      priceSelector
    );

    await browser.close();

    await res.json(newsArray);
    console.log('Took', Date.now() - start, 'ms');
  })();
});

//earth
app.get('/api/earth', (req, res) => {
  (async () => {
    const start = Date.now(); // 処理時間の計測用
    const browser = await puppeteer.launch({
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
      ],
    });
    const page = await browser.newPage();

    //不要なリソースを abort
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (
        [
          'fetch',
          'texttrack',
          'eventsource',
          'websocket',
          'manifest',
          'other',
          'media',
          'font',
          'image',
          'stylesheet',
        ].includes(request.resourceType())
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });

    const titleSelector = 'span.item-name';
    const anchorSelector = '#itemContainer > li > a';
    const imgSelector = 'span.item-photo > img';
    const priceSelector = '.price.sale';
    const url =
      'https://stripe-club.com/ap/s/s/CC010?sclses=n_sale+OR+sclses:n_pre';
    const newsArray = await getData(
      page,
      url,
      titleSelector,
      anchorSelector,
      imgSelector,
      priceSelector
    );

    await browser.close();

    await res.json(newsArray);
    console.log('Took', Date.now() - start, 'ms');
  })();
});

//listen port
app.listen(process.env.PORT || 8080);
