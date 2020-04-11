import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [
      {
        _id: '1',
        name: 'iPhone 11',
        description: '全新雙相機系統，捕捉所見所愛，範圍更多更廣。智慧型手機歷來最快速的晶片，加上滿足一天的電池續航力，讓你完成更多事，充電更少次。而智慧型手機中最高的影片畫質，讓你的點滴回憶，看起來比過去更加動人精彩。',
        image: 'https://i.gadgets360cdn.com/large/iPhone11_leak_1567592422045.jpg',
        price: 44000,
        manufacturer: 'Apple Inc'
      },
      {
        _id: '2',
        name: 'Pixel 4',
        description: '只要用Pixel 4 拍照，不用進工作室後製編輯，也能拍出相同品質的相片！Pixel 4 是第一支能夠拍下銀河的手機，只要輕輕一點，就能拍下美麗星空。',
        image: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/10/16/realtime/6946830.jpg',
        price: 24990,
        manufacturer: 'Google'
      },
      {
        _id: '3',
        name: 'Xperia 1 II',
        description: '由於 Sony 先前整合了 Mobile 手機部門到 Sony 本家消費性電子產品部門的緣故，所以這次以這樣的命名方式出現也不讓人意外。',
        image: 'https://timgm.eprice.com.tw/tw/mobile/img/2020-02/24/5484360/innocences_1_a8c4b844f3c0c83646b79e366c3d8111.jpg',
        price: 29000,
        manufacturer: 'SONY'
      },
      {
        _id: '4',
        name: 'V30S',
        description: 'LG V30 S ThinQ 最大的改變是 Vision AI 功能的加入，拍照的同時相機會自動識別畫面中的場景，準確的設定場景模式。',
        image: 'https://img.eprice.com.tw/img/mobile/5858/large.png',
        price: 12500,
        manufacturer: 'LG'
      },
      {
        _id: '5',
        name: 'Galaxy Note 9',
        description: '做為三星每年下半年度的旗艦手機，Note 系列從 2011 年的第一代 Galaxy Note 起，就以 S Pen 做為最大賣點，並且帶動大螢幕智慧手機的風潮直到今日。',
        image: 'https://timgm.eprice.com.tw/tw/mobile/img/2018-08/09/5115231/hat7029_1_77763a4f06a1fba43ab32e66d90bcba1.jpg',
        price: 18900,
        manufacturer: 'Samsung'
      }
    ],
    // all manufacturers
    manufacturers: [],
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    }
  }
});
