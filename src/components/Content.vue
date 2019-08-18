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
      var delay = 2000; //milliseconds
      var timeoutId;
      var animationIsFinished = false;
      new fullpage('#fullpage', {
        // Init
        licenseKey: 'F1F7C056-F79543AF-9D4C42D2-E43F5FDE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page14'],
        // sectionsColor: ['#1A2730', '#1A2730', '#1A2730'],

        // Navigation
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700,
        
        // Style
        // sectionsColor: ['#1A2730', '#1A2730', '#1A2730'],
        anchors: ['section1', 'section2', 'section3'],
        verticalCentered: false,

        //Methods
        onLeave: function(origin, destination, direction){
            var animationTl = new TimelineMax({});
            console.log('Leave', origin.index);
            // slide 0 - 1
            if(origin.index == 0){
              animationTl.to('.slide-image', 1, {opacity: 0, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo('section2');
                animationIsFinished = false;
              }},0);
            } 
            if(origin.index == 1){
              animationTl.to('.slide-image--2', 1, {opacity: 0, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo('section1');
                animationIsFinished = false;
              }},0);
            }
            //console.log(animationIsFinished);
            return animationIsFinished;
          },
        afterLoad: function(origin, destination, direction){
          var animationTlBack = new TimelineMax({});
            //console.log('Leave', origin.index);
            // slide 1 - 0
            if(origin.index == 1){
              animationTlBack.to('.slide-image', 1, {opacity: 1},0);
            } 
            if(origin.index == 0){
              animationTlBack.to('.slide-image--2', 1, {opacity: 1, onComplete: function(){
              }},0);
            }
          }
        });
    },
    animatePreloader(){
      setTimeout(function(){
      var preloaderTl = new TimelineMax({});
          preloaderTl.to('.pre_dot', 1, {left: '30%'},0)
                     .to('.preloader-baground', 1, {opacity: 0})
                     .set('#preloader-pane', {pointerEvents: 'none'})
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
