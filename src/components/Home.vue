<template>
  <div>
    <m-header></m-header>
    <section class="bg-color">
        <div class="center-block">
          <div class="bg-radial"></div>
          <div class="main-img">
            <img src="../assets/img/main-img.svg" alt="">
          </div>
          <h1>TBCC VPN</h1>
          <h2>Первый крипто-VPN<br>Защита даже от суперкомпьютера</h2>
          <a href="#" class="btn"><span>Загрузить</span></a>
          <div class="link-box">
            <a href="#">Купить подписку</a>
            <a href="#">Сравнить с обычным VPN</a>
          </div>
        </div>
    </section>
    <section class="bg-light">
      <div class="center-block">
        <div class="blockchain-img">
          <img src="../assets/img/blockchain.svg" alt="">
        </div>
        <h3>VPN на базе блокчейна</h3>
        <p>Мы используем блокчейн для хранения данных авторизации и выстраивания маршрутов навигации. Взломать блокчейн математически невозможно*.</p>
        <a href="#" class="link">Как это работает?</a>
      </div>
    </section>
    <section>
      <div class="center-block">
        <h3>Границ больше нет</h3>
        <p>При помощи нашего приложения интернет будет работать в любой точке мира, в любое время. Выберите страну и поезжайте туда.</p>
        <a href="#" class="link">Все страны и сервисы, с которыми мы гарантируем работу</a>
      </div>
    </section>
    <m-footer></m-footer>
  </div>
</template>

<script>

  import MHeader from './MHeader.vue';
  import MFooter from './MFooter.vue';

export default {
  components: {
    MHeader,
    MFooter,
  },

  data() {
    return {

    };
  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>

  @import "../assets/scss/utils/vars";

  .center-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;

    h1, h2, h3, .btn, p {
      margin-bottom: 32px;
    }

    .btn {
      width: 186px;
      height: 52px;
    }

    p {
      text-align: center;
      max-width: 745px;
    }
  }

  .main-img, .blockchain-img {
    margin-bottom: 20px;
  }

  .link-box {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-family: $mainFontMedium;
      font-size: 20px;
      line-height: 1;
      text-align: center;
      color: $primary-color;
      padding: 0 12px;
    }
  }

</style>
