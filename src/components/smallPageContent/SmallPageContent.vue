<template>
  <div>
    Small page!!!
  </div>
</template>

<script>
  import { mapState } from 'vuex';
import { TweenMax, TimelineMax } from 'gsap';
import { setTimeout } from 'timers';

export default {
  name: 'smallPageContent',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['userAgent']),
  },
  methods:{},
  mounted(){},
}

</script>

<style lang="scss">

</style>
