import { Injectable } from '@angular/core';
import { iphone } from './aliexpress_products';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      {
        name: 'iPhone 6',
        image: '../../assets/6.jpg',
        description: 'Смартфоны Apple iPhone 6 Original Unlocked IOS 4.7-дюймовый сенсорный экран Бесплатный чехол + фильм LTE CMOS Bluetooth 8.0MP камера для мобильного телефона',
        rating: '7.3',
        link: 'https://aliexpress.ru/item/32826927996.html?spm=a2g0o.productlist.0.0.3899143a4i0EQ8&algo_pvid=64b8cfc5-f6e5-4af8-8093-3731f7b62f61&algo_expid=64b8cfc5-f6e5-4af8-8093-3731f7b62f61-0&btsid=0ab50f6115815250063904247e7758&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        name: 'iPhone 7',
        image: '../../assets/7.jpg',
        description: 'Оригинальный мобильный телефон Apple iPhone 7, 4G LTE, 2 Гб ОЗУ 32 ГБ/128 ГБ/256 Гб ПЗУ, IOS 12.0MP камера SIM Бесплатные смартфоны отпечатков пальцев',
        rating: '8',
        link: 'https://aliexpress.ru/item/32829867151.html?spm=a2g0o.detail.1000023.9.27ee1e64HmAhEu'
      },
      {
        name: 'iPhone 5s',
        image: '../../assets/5s.jpg',
        description: 'Оригинальные разблокированные Apple iPhone 5S, 4G LTE мобильные телефоны, 4,0 дюймов, 16 ГБ/32 ГБ/64 ГБ rom, IOS gps Touch ID iCloud смартфоны',
        rating: '6.6',
        link: 'https://aliexpress.ru/item/32797283624.html?spm=a2g0o.detail.1000013.3.15fa6641eATJ1E&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.146401.0&scm_id=1007.13339.146401.0&scm-url=1007.13339.146401.0&pvid=9550d307-3b5b-4243-823d-8857c95da9b3'
      },
      {
        name: 'iPhone 8 Plus',
        image: '../../assets/8plus.jpeg',
        description: '3 дня прибытия, Apple iPhone 8 Plus 64/256GB rom 12MP задняя камера отпечаток пальца 4G LTE 5,5 дюймов iOS 11 шестиъядерный мобильные телефоны',
        rating: '6.7',
        link: 'https://aliexpress.ru/item/32919209826.html?spm=a2g0o.detail.1000013.15.322e45aehwU2xe&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.146401.0&scm_id=1007.13339.146401.0&scm-url=1007.13339.146401.0&pvid=15149fd1-8f06-455a-a8f5-5fe10a55ec1a'
      },
      {
        name: 'iPhone X',
        image: '../../assets/x.jpg',
        description: 'Разблокированный мобильный телефон Apple iPhone X Face ID, 4G LTE, 64 ГБ/256 Гб ПЗУ, 3 Гб ОЗУ, шестиядерный процессор, 5,8 дюймов, iOS A11, 12 МП, двойная задняя камера',
        rating: '9.9',
        link: 'https://aliexpress.ru/item/32978475715.html?spm=a2g0o.detail.1000023.4.344c77dcj3cuKN'
      },
      {
        name: 'iPhone SE',
        image: '../../assets/se.jpg',
        description: 'Оригинальный разблокированный Apple iPhone SE1723 2 Гб Оперативная память 16/64GB Встроенная память 4,0 дюймов 12.0MP iOS Touch ID отпечатков пальцев мобильные телефоны',
        rating: '5.7',
        link: 'https://aliexpress.ru/item/32919169040.html?spm=a2g0o.detail.1000023.8.37282cddi90xSO'
      },
      {
        name: 'iPhone 11 Pro Max',
        image: '../../assets/11promax.jpg',
        description: 'Оригинальный новый iPhone 11 Pro/Pro Max Тройная камера заднего вида 5,8/6,5 "Super AMOLED дисплей A13 Чипсет IOS 13 смартфон MI BlueTooth',
        rating: '7.3',
        link: 'https://aliexpress.ru/item/4000200667700.html?spm=a2g0o.detail.1000014.1.475e7026CEbBPg&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.13338.141931.0&scm_id=1007.13338.141931.0&scm-url=1007.13338.141931.0&pvid=4936d239-1ea3-48f0-aa9c-111aca72b05e'
      },
      {
        name: 'iPhone 11',
        image: '../../assets/11.jpg',
        description: 'Apple iPhone 11 | 4G смартфон A13 с бионическим чипом 6,1 дюймов жидкий сетчатый HD ЖК-дисплей Двойная камера',
        rating: '5.9',
        link: 'https://aliexpress.ru/item/4000191320535.html?spm=a2g0o.detail.1000014.5.db1a10bblxsPSm&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.13338.141931.0&scm_id=1007.13338.141931.0&scm-url=1007.13338.141931.0&pvid=cc682a5e-9ee9-4b84-81e2-49416e37cd69'
      },
      {
        name: 'iPhone XS Max',
        image: '../../assets/xs max.jpg',
        description: 'Apple iPhone XS Max | смартфон с двумя sim-картами 2018 полностью разблокированный 6,5 дюймовый большой экран 4G Lte Apple смартфон',
        rating: '8.3',
        link: 'https://aliexpress.ru/item/32889348604.html?spm=a2g0o.detail.1000013.13.1678599blrcmzM&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.146401.0&scm_id=1007.13339.146401.0&scm-url=1007.13339.146401.0&pvid=59f27e0c-9924-4ef0-8c34-1edeba4e8464'
      },
      {
        name: 'iPhone 7 Plus',
        image: '../../assets/7plus.png',
        description: 'Для Apple iPhone 7 Plus iPhone 7, 3 Гб оперативной памяти, Оперативная память 32/128 ГБ/256 ГБ Встроенная память IOS 10 сотовый телефон 12.0MP Камера Quad-Core отпечатков пальцев 12MP 2910mA',
        rating: '9.2',
        link: 'https://aliexpress.ru/item/32854844856.html?spm=a2g0o.detail.1000014.29.36543a176AwuLg&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.13338.141931.0&scm_id=1007.13338.141931.0&scm-url=1007.13338.141931.0&pvid=4a46e125-ca29-4ec9-b2a9-dfb4f0a26402'
      }
    ];
  }
}
