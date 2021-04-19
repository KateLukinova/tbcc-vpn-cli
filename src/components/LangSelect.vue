<template>
  <div class="lang-box">
    <v-select v-model="selected" :option="options" :on-change="changeLang" class="my-v-select"></v-select>
    <div class="g-icon">
      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 0C14.4174 0 17.2153 1.15893 19.2782 3.22183C21.3411 5.28473 22.5 8.08262 22.5 11C22.5 13.9174 21.3411 16.7153 19.2782 18.7782C17.2153 20.8411 14.4174 22 11.5 22C8.58262 22 5.78473 20.8411 3.72183 18.7782C1.65893 16.7153 0.5 13.9174 0.5 11C0.5 8.08262 1.65893 5.28473 3.72183 3.22183C5.78473 1.15893 8.58262 0 11.5 0ZM19.7822 6.76923C18.6968 4.65894 16.8499 3.04009 14.6155 2.24062C15.3669 3.66215 15.9102 5.18523 16.2283 6.76923H19.7822ZM20.7671 11.8377C20.7942 11.5593 20.8077 11.2797 20.8077 11C20.806 10.1412 20.6847 9.28685 20.4472 8.46154H16.4838C16.538 9.02169 16.5769 9.58523 16.5769 10.1538C16.5734 11.2908 16.4566 12.4246 16.2283 13.5385H20.4472C20.608 12.9817 20.7146 12.4131 20.7688 11.8377H20.7671ZM14.7848 11.8377L14.7949 11.7514C14.8527 11.2208 14.8826 10.6876 14.8846 10.1538C14.8733 9.58779 14.8303 9.02281 14.756 8.46154H8.244C8.16907 9.02275 8.12612 9.58776 8.11538 10.1538C8.11952 11.2933 8.25179 12.4286 8.50969 13.5385H14.4903C14.6206 12.9766 14.7188 12.4097 14.7848 11.8377ZM14.4598 6.76923C14.0611 4.97936 13.3416 3.2765 12.336 1.74308C12.0585 1.71938 11.7809 1.69231 11.5 1.69231C11.3237 1.69317 11.1476 1.70164 10.972 1.71769L10.664 1.74308L10.6538 1.76C9.65357 3.28893 8.93752 4.98589 8.54015 6.76923H14.4598ZM6.77169 6.76923C7.0963 5.18632 7.64686 3.65833 8.40646 2.23215C6.16243 3.02889 4.30678 4.65153 3.21785 6.76923H6.77169ZM2.55277 8.46154C2.31566 9.28692 2.19435 10.1412 2.19231 11C2.19435 11.8588 2.31566 12.7131 2.55277 13.5385H6.77169C6.54226 12.4248 6.42547 11.2909 6.42308 10.1538C6.42308 9.58523 6.462 9.02169 6.51615 8.46154H2.55277ZM7.21338 15.2308H3.21954C3.85925 16.4803 4.7726 17.5695 5.89159 18.4172C7.01057 19.2648 8.30636 19.8491 9.68246 20.1266C8.59936 18.6394 7.76544 16.9858 7.21338 15.2308ZM11.5 19.7052C12.5821 18.3668 13.428 16.8536 14.0012 15.2308H8.99877C9.57202 16.8536 10.4179 18.3668 11.5 19.7052ZM15.7866 15.2308C15.2345 16.9858 14.4006 18.6394 13.3175 20.1266C14.6936 19.8489 15.9892 19.2645 17.1082 18.4169C18.2271 17.5692 19.1405 16.4802 19.7805 15.2308H15.7866Z" fill="#313444"/>
      </svg>
    </div>
  </div>
</template>

<script>
  import vSelect from 'vselect-component'

  export default {
    components: {
      vSelect
    },

    data() {
      return {
        index: 1,
        options: [
          {
            value: 1,
            label: 'RU'
          },
          {
            value: 2,
            label: 'EN'
          },
          {
            value: 3,
            label: 'ZH'
          }
        ],
        selected: {
          label: 'RU'
        }
      }
    },

    methods: {
      changeLang: function () {
        this.$i18n.locale = this.selected.label.toLowerCase();
        sessionStorage.setItem('lang', this.selected.label.toLowerCase());
        window.eventBus.$emit('langChanged', {
          lang: this.selected.label.toLowerCase()
        })
      }
    },

    mounted(){
      if (sessionStorage.getItem('lang')) {
        this.$i18n.locale = sessionStorage.getItem('lang');
      } else {
        var userLang = navigator.language || navigator.userLanguage;

        var lang = 'en'

        if (userLang === 'ru-RU') {
          lang = 'ru'
        } else if (userLang === 'zh-CN') {
          lang = 'zh'
        }

        this.$i18n.locale = lang;
        sessionStorage.setItem('lang', lang);
      }

      this.selected = {
        label: sessionStorage.getItem('lang').toUpperCase()
      }
    },

    watch:{
      'selected'  : function () {
        this.changeLang();
      }
    }
  }
</script>

<style lang="scss">

@import "../assets/scss/utils/vars";

  .lang-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 23px;

    @media (max-width: 768px) {
      flex-direction: row-reverse;
    }
  }

.g-icon {
  height: 22px;
  display: flex;
}

  .my-v-select {
    width: 27px!important;
    height: max-content!important;
    .up.input-control::after, .down.input-control::after {
      content: none;
    }
    .input-control {
      input {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: $mainFontMedium;
        font-size: 13px;
        line-height: 1.2;
        color: $mainFontColor;
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .dropMenu {
      padding: 10px!important;
      right: 0;
      top: 35px!important;
      min-width: auto!important;
      ul {
        overflow-y: hidden!important;
        li {
          height: auto;
          font-family: $mainFontMedium;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 1;
          display: flex;
          align-items: center;
          color: #909399;
          &.active {
            color: #070E1E;
          }
        }
      }
    }
  }
</style>
