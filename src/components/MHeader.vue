<template>
  <header>
    <div class="container header__container">
      <router-link to="/main" class="logo">
        <img src="../assets/img/logo.svg" alt="">
      </router-link>
      <nav class="navbar" v-bind:class="{ open: isMenuOpened }">
        <ul class="navbar-nav">
          <li>
            <router-link to="/main" class="logo-mobile">
              <img src="../assets/img/logo.svg" alt="">
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/main" class="nav-link">
              {{ $t('menuItemOne') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              {{ $t('menuItemTwo') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              {{ $t('menuItemThree') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              {{ $t('menuItemFour') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              {{ $t('menuItemFive') }}
            </router-link>
          </li>
          <li class="nav-item success-color">
            <router-link class="nav-link" to="/">
              {{ $t('menuItemSix') }}
            </router-link>
          </li>
          <li class="nav-item cabinet-text">
            <router-link class="nav-link" to="/">
              {{ $t('menuItemSeven') }}
            </router-link>
          </li>
        </ul>
        <p class="navbar__text-mobile">Что-то юридическое здесь</p>
      </nav>
      <div class="header__icon-box">
        <lang-select></lang-select>
        <div class="menu-toggle" @click="isMenuOpened = !isMenuOpened" v-bind:class="{ active: isMenuOpened }">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <router-link class="cabinet-icon" to="/">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM11 4.4C13.123 4.4 14.85 6.127 14.85 8.25C14.85 10.373 13.123 12.1 11 12.1C8.877 12.1 7.15 10.373 7.15 8.25C7.15 6.127 8.877 4.4 11 4.4ZM11 19.8C8.767 19.8 6.127 18.898 4.246 16.632C6.17277 15.1203 8.55098 14.2987 11 14.2987C13.449 14.2987 15.8272 15.1203 17.754 16.632C15.873 18.898 13.233 19.8 11 19.8Z" fill="#313444"/>
          </svg>
        </router-link>
      </div>
    </div>
  </header>

</template>

<script>

export default {
  data() {
    return {
      isMenuOpened: false
    }
  }
};
</script>

<style lang="scss" scoped>

@import "../assets/scss/utils/vars";

  header {
    width: 100%;
    padding: 30px 0;
    height: auto;
    background-color: #FFFFFF;

    @media (max-width: 768px) {
      padding: 20px 0;
      border-top: 20px solid #313444;
    }
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20px;
    height: 14px;
    position: relative;

    .line {
      width: 20px;
      height: 2px;
      min-height: 2px;
      background-color: #313444;
      transition: all 0.5s ease;
    }

    @media (max-width: 768px) {
      display: flex;
    }

    &.active {
      height: 24px;
      .line {
        width: 24px;
      }
      .line:nth-child(1) {
        transform: rotate(45deg);
        position: absolute;
        top: 11px;
      }
      .line:nth-child(2) {
        opacity: 0;
      }

      .line:nth-child(3) {
        transform: rotate(-45deg);
        position: absolute;
        bottom: 11px;
      }
    }
  }

  .logo {
    width: 35px;
    height: 40px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .logo-mobile {
    width: 35px;
    height: 40px;
    display: none;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  .navbar__text-mobile {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: $mainFont;
      font-size: 14px;
      line-height: 1.14;
      text-align: center;
      color: #999999;
      width: 90%;
      margin: auto;
    }
  }

  .navbar {
    @media (max-width: 768px) {
      position: fixed;
      z-index: 10;
      top: 88px;
      left: 0;
      background-color: #FFFFFF;
      width: 100vw;
      height: calc(100vh - 88px);
      transform: translateX(100%);
      transition: all 0.5s ease;
      opacity: 0;
      padding: 20px 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      &.open {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .navbar-nav {
    display: flex;
    justify-content: space-between;
    width: 660px;

    @media (max-width: 990px) {
      width: 540px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }

  .header__icon-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  .cabinet-icon {
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
  }

.cabinet-text {
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
}

  .nav-item {
    font-family: $mainFontMedium;
    font-size: 17px;
    line-height: 1.18;
    text-align: center;
    color: $mainFontColor;

    &.success-color {
      color: $success-color;

      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 220px;
        height: 54px;
        text-transform: uppercase;
        position: relative;
        border-radius: 44px;
        margin-top: 40px;
        margin-bottom: 30px;
        background-color: #FFFFFF;
        font-size: 15px;

        &:before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: 224px;
          height: 58px;
          z-index: -1;
          background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
          border-radius: 44px;
        }
      }
    }

    @media (max-width: 990px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 19px;
      margin-bottom: 20px;
    }
  }
</style>
