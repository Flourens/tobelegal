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
        anchors: ['section-0', 'section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10', 'section-11', 'section-12', 'section-13'],
        // sectionsColor: ['#1A2730', '#1A2730', '#1A2730'],
        // Navigation
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 0, 
        verticalCentered: true,

        //Methods
        onLeave: function(origin, destination, direction){
            var animationTl = new TimelineMax({});
            console.log('Leave: ' + origin.index, 'Enter: ' + destination.index, 'Direction: ' + direction);
            // slide 1
            if(origin.index == 0){
              animationTl.to('.slide__overlay', 0.6, {ease: Power0.easeNone, height:'110vh'},0)
              .to('.preloader-pane-1,#preloader-pane-2,.slide-image--1', 0.6,{opacity:0, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0);
            }
            // slide 2
            if(origin.index == 1){
              animationTl.to('.slide-2-cols', 0.6, {opacity: 0, y: -100})
              .set('.slide__overlay', {opacity: 1, onComplete: function(){
                          animationIsFinished = true;
                          fullpage_api.moveTo(`section-${destination.index}`);
                          animationIsFinished = false;
                        }})
                        .set('.section.active', {opacity: 0});
            }
            // slide 3
            if(origin.index == 2){
              animationTl.to('.slide-3-cols__1', 0.6, { y: -50, opacity: 0 })
                         .set('.slide__overlay', {opacity: 1, onComplete: function(){
                          animationIsFinished = true;
                          fullpage_api.moveTo(`section-${destination.index}`);
                          animationIsFinished = false;
                        }})
                        .set('.section.active', {opacity: 0});
            }
            // slide 4
            if(origin.index == 3){
              TweenMax.killChildTweensOf( ".list-country" );
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 5
            if(origin.index == 4){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 6
            if(origin.index == 5){
              animationTl.to('.slide-6-cols__1 .text', 0.6, { opacity:0, y:-60 })
                         .to('.slide-image--5', 1.5, { opacity:0,xPercent:-30, onComplete: function(){
                            animationIsFinished = true;
                            fullpage_api.moveTo(`section-${destination.index}`);
                            animationIsFinished = false;
                          }})
              .set('.section.active', {opacity: 0});
            }
            // slide 7
            if(origin.index == 6){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 8
            if(origin.index == 7){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 9
            if(origin.index == 8){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 10
            if(origin.index == 9){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 11
            if(origin.index == 10){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 12
            if(origin.index == 11){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 13
            if(origin.index == 12){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            // slide 14
            if(origin.index == 13){
              animationTl.set('.slide__overlay', {opacity: 1, onComplete: function(){
                animationIsFinished = true;
                fullpage_api.moveTo(`section-${destination.index}`);
                animationIsFinished = false;
              }},0)
              .set('.section.active', {opacity: 0});
            }
            return animationIsFinished;
          },
        afterLoad: function(origin, destination, direction){

          var animationTlBack = new TimelineMax({});
          var countriesLoop = new TimelineMax({repeat:-1, force3D:true});
          // slide 1
          if(destination.index == 0){
            animationTlBack.set('.preloader-pane-1,#preloader-pane-2,.black-logo,.slide-image--1', {opacity:1})
                           .fromTo('.slide__overlay', 0.6, {ease: Power0.easeNone, height:'100vh'},{ease: Power0.easeNone, height:'0vh'},0)
            ;
          }
          // slide 2
          if(destination.index == 1){
            let blackLogoHeigth = document.querySelector('.black-logo__owerlay').scrollHeight;
            let photoHeigth = document.querySelector('.photo__owerlay').scrollHeight;
                animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                               .set('.section.active', {opacity: 1},0)
                               .set('.slide-2-cols', {clearProps: 'all'})
                               // logo+photo
                               .fromTo('.black-logo', 0.6, { opacity:0, y:-150 },{ opacity:1, y:0 },0)
                               .fromTo('.slide-image--2', 0.6, { opacity:0, y:150 },{ opacity:1, y:0 },0)
                               // text
                               .fromTo('.slide-2-cols__1 .year', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                               .fromTo('.slide-2-cols__1 .text', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                               // line
                               .fromTo('.slide-2-cols .line-1', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                               // text
                               .fromTo('.slide-2-cols__3 .year', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                               .fromTo('.slide-2-cols__3 .text', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                               // line
                               .fromTo('.slide-2-cols .line-2', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                ;
            ;
          }
          // slide 3
          if(destination.index == 2){
              animationTlBack.set('.slide-3-cols__1', { y: 0, opacity: 1 })
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              // text
                              .fromTo('.slide-3-cols__1 .text', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-3-cols__1 .list-block .list-block__item', 0.4, { opacity:0, x:50 },{ opacity:1, x:0}, 0.6)
                              .staggerFromTo('.list-block__item-arrow', 0.4, { x:10 },{ x:0 }, 0.6, '-=1.2')
              ;
          }
          if(destination.index == 3){
              let countries = document.querySelectorAll('.list-country__item');
              animationTlBack.set('.slide-4-cols__1', { y: 0, opacity: 1 })
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              // text
                              .fromTo('.slide-4-cols__1 .text', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                              .fromTo('.list-country', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
              ;
              countriesLoop = new TimelineMax({repeat:-1, force3D:true});
              countriesLoop.fromTo(countries[0], 1.2, { opacity:0},{ opacity:1})
                            .to(countries[0], 0.4, { opacity:0 }, "+=1")
                            .fromTo(countries[1], 1.2, { opacity:0},{ opacity:1})
                            .to(countries[1], 0.4, { opacity:0 },"+=1")
                            .fromTo(countries[2], 1.2, { opacity:0},{ opacity:1})
                            .to(countries[2], 0.4, { opacity:0 },"+=1")
                            .fromTo(countries[3], 1.2, { opacity:0},{ opacity:1})
                            .to(countries[3], 0.4, { opacity:0 },"+=1")
                            .fromTo(countries[4], 1.2, { opacity:0},{ opacity:1})
                            .to(countries[4], 0.4, { opacity:0 },"+=1")
                            .fromTo(countries[5], 1.2, { opacity:0},{ opacity:1})
                            .to(countries[5], 0.4, { opacity:0 },"+=1");
          }
          if(destination.index == 4){
              animationTlBack.set('.slide-5-cols__1', { y: 0, opacity: 1 })
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--5', 1.5, { opacity:0, xPercent:30 },{ opacity:1,xPercent:0 })
                              .fromTo('.slide-5-cols__1 .text', 0.6, { opacity:0, x:-30 },{ opacity:1, x:0 })
                              .fromTo('.slide-5-cols__1 .list-hammer__item-1', 0.6, { opacity:0, x:60 },{ opacity:1, x:0 })
                              .fromTo('.slide-5-cols__1 .list-hammer__item-2', 0.6, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .fromTo('.slide-5-cols__1 .list-hammer__item-3', 0.6, { opacity:0, x:60 },{ opacity:1, x:0 })
              ;
          }
          if(destination.index == 5){
              animationTlBack.set('.slide-6-cols__1', { y: 0, opacity: 1 })
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--5', 1.5, { opacity:0, xPercent:30 },{ opacity:1,xPercent:0 })
                              .fromTo('.slide-6-cols__1 .text', 0.6, { opacity:0, x:-60 },{ opacity:1, x:0 })
              ;
          }
          if(destination.index == 6){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 7){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 8){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 9){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 10){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 11){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 12){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
              ;
          }
          if(destination.index == 13){
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
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
