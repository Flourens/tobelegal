<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import handleResize from '@/mixins/handleResize';
import handleOrientation from '@/mixins/handleOrientation';

export default {
  components: {},
  data() {
    return {
      user_lang: navigator.language || navigator.userLanguage,
    };
  },
  watch: {},
  computed: {
    ...mapState(['userAgent'])
  },
  mixins: [handleResize, handleOrientation],
  methods: {
    setUserLanguage(){
      var formatedUserLang = this.user_lang.substring(0, 2).toLowerCase();  
      this.$store.commit('DETECT_USER_LANGUAGE', formatedUserLang);
    }
  },
  mounted() {
    this.setUserLanguage();
  }
};
</script>

<style lang="scss" src="./styles/main.scss">
</style>
