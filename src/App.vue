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
    return {};
  },
  watch: {},
  computed: {
    ...mapState(['userAgent'])
  },
  mixins: [handleResize, handleOrientation],
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" src="./styles/main.scss">
</style>
