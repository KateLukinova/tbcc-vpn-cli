import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {

    en: {
      "menuItemOne": "fffff",
      "menuItemTwo": "fffff",
      "menuItemThree": "ffff",
      "menuItemFour": "ffff",
      "menuItemFive": "ffff",
      "menuItemSix": "ffff",
      "menuItemSeven": "ffff",
    },

    zh: {
      "menuItemOne": "创建新",
      "menuItemTwo": "创建新",
      "menuItemThree": "创建新",
      "menuItemFour": "创建新",
      "menuItemFive": "创建新",
      "menuItemSix": "创建新",
      "menuItemSeven": "创建新",
    },

    ru: {
      "menuItemOne": "Цены и покупка",
      "menuItemTwo": "Возможности",
      "menuItemThree": "Все о VPN",
      "menuItemFour": "TBCC Labs",
      "menuItemFive": "Помощь",
      "menuItemSix": "Загрузить",
      "menuItemSeven": "Личный кабинет",
    }
  }
})
