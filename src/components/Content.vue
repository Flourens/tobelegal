<template src="./Content.html">
</template>

<script>
import { mapState } from 'vuex';
import { TweenMax, TimelineMax } from 'gsap';
import { setTimeout } from 'timers';

export default {
  name: 'Content',
  props: {
    msg: String
  },
  data() {
    return {
      openMenu: false,
    }
  },
  methods:{
    toggleMenu(){
      this.openMenu = !this.openMenu;
    },
    initSectionSlides(){
      var delay = 1000; //milliseconds
      var timeoutId;
      var animationIsFinished = false;
      new fullpage('#fullpage', {
        // Init
        licenseKey: 'F1F7C056-F79543AF-9D4C42D2-E43F5FDE',
        menu: '#menu',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10', 'section11', 'section12', 'section13', 'section14'],
        // sectionsColor: ['#1A2730', '#1A2730', '#1A2730'],
        // Navigation
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 0, 
        verticalCentered: true,

        //Methods
        onLeave: function(origin, destination, direction){
            var animationTl = new TimelineMax({});
            console.log('Leave', origin.index);
            // slide 0
            if(origin.index == 0){
              animationTl.to('.slide__overlay', 0.6, {ease: Power0.easeNone, height:'110vh'},0)
              .to('.preloader-pane-1,#preloader-pane-2,.slide-image--1', 0.6,{opacity:0, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo('section2');
                animationIsFinished = false;
              }},0);
            }
            // slide 1
            if(origin.index == 1){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo('section1');
                animationIsFinished = false;
              }},0);
            }
            return animationIsFinished;
          },
        afterLoad: function(origin, destination, direction){
          console.log('After load', destination.index);

          var animationTlBack = new TimelineMax({});
          // slide 0
          if(origin.index == 1){
            animationTlBack.set('.preloader-pane-1,#preloader-pane-2,.black-logo,.slide-image--1', {opacity:1})
                           .fromTo('.slide__overlay', 0.6, {ease: Power0.easeNone, height:'100vh'},{ease: Power0.easeNone, height:'0vh'},0)
            ;
          }
          // slide 1
          if(destination.index == 1){
            let blackLogoHeigth = document.querySelector('.black-logo__owerlay').scrollHeight;
            let photoHeigth = document.querySelector('.photo__owerlay').scrollHeight;
            animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0);
            ;
          }

        }
      });
    },
    animatePreloader(){
      setTimeout(function(){
      var preloaderTl = new TimelineMax({});
          preloaderTl.to('.pre_dot', 1, {left: '19.5%'},0)
                     .to('#preloader-pane-1', 0.3, {opacity: 0})
                     .to('.per_dot', 0.1, {opacity: 0}, '-=1')
                     .set('#preloader-pane-1, #preloader-pane-2', {pointerEvents: 'none'})
                     .fromTo('.slide-1-cols__1 .text', 0.4, {x: -80,opacity:0},{x: 0,opacity:1})
                     .fromTo('.slide-1-cols__2', 0.4, {y: 50, opacity:0},{y: 0,opacity:1})
          ;
      }, 400);
    },
  },
  computed: {
    ...mapState(['userAgent']),
  },
  mounted(){
    this.initSectionSlides();
    this.animatePreloader();
    
  },
}


}
</script>

<style lang="scss" src="./Content.scss">
</style>
