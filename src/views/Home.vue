<template>
  <div class="page_wrapper">
    <smallPageContent v-if="(this.userAgent.window.width < 1024 && !this.userAgent.device.isMobile) || (this.userAgent.window.height < 520)"/>
    <Content v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'
import smallPageContent from '@/components/smallPageContent/SmallPageContent.vue'
import { mapState } from 'vuex';
import { TweenMax, TimelineMax } from 'gsap';
import { setTimeout } from 'timers';

export default {
  name: 'home',
  components: {
    Content,
    smallPageContent
  },
  methods:{
    animatePreloader(){
      let preloaderShift = '-70%';
      if(this.userAgent.window.width >= 1920){
        preloaderShift = '-89%';
      }
      if(this.userAgent.window.width >= 2600){
        preloaderShift = '-85%';
      }
      setTimeout(()=>{
        var preloaderTl = new TimelineMax({});
        if((this.userAgent.window.width > 768 && !this.userAgent.device.isMobile) || (this.userAgent.window.width >= 1024 && this.userAgent.device.isMobile && this.userAgent.orientation == 'landscape')){
          preloaderTl.to('#cut-off-bottom-rect', 3, { attr:{transform:"translate(0,0)"} })
                     .to('#logo-anim-1 > *', 0.3, { x:50,opacity: 0})
                     .to('.hummer', 0.3, {opacity: 0},"-=0.3")
                     .to('.pre_dot', 1.1, {left: preloaderShift})
                     .to('#preloader-pane-1', 0.7, {opacity: 0})
                     .fromTo('.slide-image--1', 0.7, {opacity: 0},{opacity: 1}, '-=0.7')
                     .set('#preloader-pane-1, #preloader-pane-2', {pointerEvents: 'none'})
                     .fromTo('.slide-1-cols__1 .text', 0.8, {x: -220,opacity:0},{x: 0,opacity:1})
                     .fromTo('.quote', 1, {y: 60, opacity:0},{y: 0,opacity:1}, '+=0.1');
        } else {
          preloaderTl.to('#cut-off-bottom-rect-2', 3, { attr:{transform:"translate(0,0)"} },0)
                     .set(".slide-image--mob-1, .logo-block__2, .slide-1-cols__3 .text-2, .quote", {opacity:0})
                     .to('#preloader-pane-1', 0.3, {opacity: 0})
                     .fromTo(".slide-image--mob-1", 1, {x:-100, y:0},{x:0})
                     .fromTo(".slide-image--mob-1", 1.6, {opacity:0},{opacity:1}, '-=1')
                     .fromTo(".logo-block__2", 0.6, {opacity:0},{opacity:1}, '-=0.6')
                     .staggerFromTo(".slide-1-cols__3 .text-2", 0.6, {x:30,y:0,opacity:0},{x:0,y:0,opacity:1},0.6)
                     .fromTo(".quote", 1.2, {x:0,y:60,opacity:0},{y:0,opacity:1})
          ;
        }
        
      }, 400);
    },
  },
  computed: {
    ...mapState(['userAgent']),
  },
  mounted(){},
  created(){
    window.addEventListener('load', () => {
      this.animatePreloader();
    })
  },
  destroyed(){
    window.removeEventListener('load', () => {
      this.animatePreloader();
    })
  }
}
</script>
