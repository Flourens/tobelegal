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
          console.log(destination.index);
            var animationTl = new TimelineMax({});
            console.log('Leave: ' + origin.index, 'Enter: ' + destination.index, 'Direction: ' + direction);
            // Leave animation slide 1
            if(origin.index == 0){
              animationTl.to('.slide__overlay', 0.6, {ease: Power0.easeNone, height:'110vh'},0)
              .to('.preloader-pane-1,#preloader-pane-2,.slide-image--1', 0.6,{opacity:0, onComplete: function(){
                animationIsFinished = true;
                if(direction == 'up'){
                  fullpage_api.moveTo(`section-${destination.index}`);
                  animationIsFinished = false;
                } else {
                  fullpage_api.moveTo(`section-${destination.index}`);
                  animationIsFinished = false;
                }
              }},0);
            }
            // Leave animation slide 2
            if(origin.index == 1){
              if(direction == 'up'){
                animationTl.to('.slide-2-cols, .slide-image--2, .black-logo__owerlay', 0.6, {opacity: 0, y: -100})
                            .set('.slide__overlay', {opacity: 1, delay: 0.6, onComplete: function(){
                              animationIsFinished = true;
                              fullpage_api.moveTo(`section-${destination.index}`);
                              animationIsFinished = false;
                            }})
                            .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                animationTl.to('.slide-2-cols', 0.6, {opacity: 0, y: -100})
                            .to('.slide-image--2, .slide-image--3', 0.6, { left:'56.5%' })
                            .set('.slide__overlay', {opacity: 0, onComplete: function(){
                              animationIsFinished = true;
                              fullpage_api.moveTo(`section-${destination.index}`);
                              animationIsFinished = false;
                            }})
                            .set('.section.active', {opacity: 0});
              }
            }
            // Leave animation slide 3
            if(origin.index == 2){
              if(direction == 'up'){
              animationTl.to('.slide-3-cols__1', 0.6, { y: -50, opacity: 0 })
                         .to('.slide-image--2, .slide-image--3', 0.6, { left: '47%' })
                         .set('.slide__overlay', {opacity: 0, onComplete: function(){
                          animationIsFinished = true;
                          fullpage_api.moveTo(`section-${destination.index}`);
                          animationIsFinished = false;
                        }})
                        .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                animationTl.to('.slide-3-cols__1', 0.6, { y: -50, opacity: 0 })
                          .set('.slide__overlay', {opacity: 0, onComplete: function(){
                            animationIsFinished = true;
                            fullpage_api.moveTo(`section-${destination.index}`);
                            animationIsFinished = false;
                          }})
                          .set('.section.active', {opacity: 0});
              }
            }
            // Leave animation slide 4
            if(origin.index == 3){
              TweenMax.killChildTweensOf( ".list-country" );
              if(direction == 'up'){
              animationTl.to('.slide-4-cols__1', 0.2, { opacity: 0, y: -60, delay: 0.5 },0)
                          .set('.slide__overlay', {opacity: 0, delay: 0.5, onComplete: function(){
                            animationIsFinished = true;
                            fullpage_api.moveTo(`section-${destination.index}`);
                            animationIsFinished = false;
                          }})
                          .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                animationTl.to('.slide-image--2, .slide-image--3', 0.2, { opacity: 0 },0)
                        .to('.slide-4-cols__1', 0.2, { opacity: 0, y: -60 },0)
                        .set('.slide__overlay', {opacity: 0, delay: 0.5, onComplete: function(){
                          animationIsFinished = true;
                          fullpage_api.moveTo(`section-${destination.index}`);
                          animationIsFinished = false;
                        }})
                        .set('.section.active', {opacity: 0});
              }
            }
            // Leave animation slide 5
            if(origin.index == 4){
              if(direction == 'up'){
                animationTl.to('.slide-5-cols__1', 0.6, { y: -80, opacity: 0 })
                .to('.slide-image--5', 1.5, { opacity:0,xPercent:-30 }, 0)
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                  animationIsFinished = true;
                  fullpage_api.moveTo(`section-${destination.index}`);
                  animationIsFinished = false;
                }})
              .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                animationTl.to('.slide-5-cols__1', 0.6, { y: -80, opacity: 0 })
                .set('.slide__overlay', {opacity: 0, delay: 0.5, onComplete: function(){
                  animationIsFinished = true;
                  fullpage_api.moveTo(`section-${destination.index}`);
                  animationIsFinished = false;
                }})
              }
            }
            // Leave animation slide 6
            if(origin.index == 5){
              if(direction == 'up'){
                animationTl.to('.slide-6-cols__1 .text', 0.6, { opacity:0, y:-60, onComplete: function(){
                              animationIsFinished = true;
                              fullpage_api.moveTo(`section-${destination.index}`);
                              animationIsFinished = false;
                            }})
                .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                   animationTl.to('.slide-6-cols__1 .text', 0.6, { opacity:0, y:-60 })
                              .set('.black-logo,.black-logo__owerlay', { clearProps: 'all' },0)
                              .to('.black-logo__owerlay', 0.6, { height: 0 },0)
                              .to('.slide-image--5', 1.1, { opacity:0,xPercent:-30, onComplete: function(){
                                animationIsFinished = true;
                                fullpage_api.moveTo(`section-${destination.index}`);
                                animationIsFinished = false;
                              }}, '-=0.6')
                .set('.section.active', {opacity: 0});
              }
            }
            
            // Leave animation slide 7
            if(origin.index == 6){
              if(direction == 'up'){
                animationTl.to('.slide-7-cols', 0.3, { opacity:0, },0)
                .to('.slide-image--6', 1.5, { opacity:0,xPercent:-30 })
                .set('.black-logo,.black-logo-right__owerlay', { clearProps: 'all' },0)
                .to('.black-logo-right__owerlay', 0.6, { height: 0 },0)
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                  animationIsFinished = true;
                  fullpage_api.moveTo(`section-${destination.index}`);
                  animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                animationTl.to('.slide-7-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
              }
            }

            // Leave animation slide 8
            if(origin.index == 7){
              animationTl.to('.slide-8-cols', 0.3, { opacity:0 , delay: 0.5},0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
            }
            // Leave animation slide 9
            if(origin.index == 8){
              animationTl.to('.slide-9-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
            }
            // Leave animation slide 10
            if(origin.index == 9){
              animationTl.to('.slide-10-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
            }
            // Leave animation slide 11
            if(origin.index == 10){
              animationTl.to('.slide-11-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
            }
            // Leave animation slide 12
            if(origin.index == 11){
              animationTl.to('.slide-12-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
            }


            // Leave animation slide 13
            if(origin.index == 12){
              if(direction == 'up'){
                animationTl.to('.slide-13-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .set('.slide-image--6', { opacity:1,xPercent:0 })
                .set('.slide__overlay', {opacity: 0, onComplete: function(){
                    animationIsFinished = true;
                    fullpage_api.moveTo(`section-${destination.index}`);
                    animationIsFinished = false;
                }})
                .set('.section.active', {opacity: 0});
              } else if(direction == 'down'){
                 animationTl.to('.slide-13-cols', 0.3, { opacity:0, delay: 0.5 },0)
                .to('.slide-image--6', 1.5, { opacity:0,xPercent:-30, onComplete: function(){
                  animationIsFinished = true;
                  fullpage_api.moveTo(`section-${destination.index}`);
                  animationIsFinished = false;
                }})
              }
            }


            // Leave animation slide 14
            if(origin.index == 13){
              animationTl.to('.slide-image--7', 1,{ opacity: 0 })
                          .to('.slide-14-cols-2', 1, { opacity:0 },0)
                          .to('.slide-14-cols-1 .contact-title', 0.6, { x:-60,opacity:0 },{ x:0,opacity:1 }, '-=0.5')
                          .to('.slide-14-cols-1 .contact-group-1', 0.6, { x:-60,opacity:0 },0)
                          .to('.slide-14-cols-1 .contact-group-2', 0.6, { x:-60,opacity:0 },0)
                          .to('.slide-14-cols-1 .contact-group-3', 0.6, { x:-60,opacity:0 },0)
                          .to('.slide-14-cols-1 .contact-name', 0.3, { opacity:0, x:60 },0)
                          .set('.section.active', {opacity: 0})
                          .set('.slide__overlay', {opacity: 0, onComplete: function(){
                            animationIsFinished = true;
                            fullpage_api.moveTo(`section-${destination.index}`);
                            animationIsFinished = false;
                          }});
              ;

            }
            return animationIsFinished;
          },
        afterLoad: function(origin, destination, direction){
          var animationTlBack = new TimelineMax({});
          var countriesLoop = new TimelineMax({repeat:-1, force3D:true});
          animationTlBack.progress(0);
          countriesLoop.progress(0);
          // Enter anim slide 1
          if(destination.index == 0){
            animationTlBack.set('.preloader-pane-1,#preloader-pane-2,.black-logo,.slide-image--1', {opacity:1})
                           .fromTo('.slide__overlay', 0.6, {ease: Power0.easeNone, height:'100vh'},{ease: Power0.easeNone, height:'0vh'},0)
            ;
          }
          // Enter anim slide 2
          if(destination.index == 1){
            let blackLogoHeigth = document.querySelector('.black-logo__owerlay').scrollHeight;
            let photoHeigth = document.querySelector('.photo__owerlay').scrollHeight;
            if(origin.index == 2){
                  animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                                .set('.section.active', {opacity: 1},0)
                                .set('.slide-2-cols', {clearProps: 'all'})
                                // text
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
            } else {
              animationTlBack.set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              .set('.slide-2-cols', {clearProps: 'all'})
                              // logo+photo
                              .set('.black-logo,.black-logo__owerlay', { clearProps: 'all' },0)
                              .set('.black-logo__owerlay', { height: 0 },0)
                              .set('.black-logo__owerlay', { height: 'auto' })
                              .from('.black-logo__owerlay', 0.6, { height: 0 })
                              //
                              .set('.slide-image--2', { clearProps: 'all' },0)
                              .set('.photo__owerlay', { height: 0 },0)
                              .set('.photo__owerlay', { height: 'auto' })
                              .from('.photo__owerlay', 0.6, { height: 0 }, '-=0.6')
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
            }
            
          }
          // Enter anim slide 3
          if(destination.index == 2){
              animationTlBack.set('.slide-3-cols__1', { y: 0, opacity: 1 })
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              .set('.slide-image--2, .slide-image--3', { opacity:1, left: '56.5%' },0)
                              // text
                              .fromTo('.slide-3-cols__1 .text', 0.6, { opacity:0, x:-50 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-3-cols__1 .list-block .list-block__item', 0.4, { opacity:0, x:50 },{ opacity:1, x:0}, 0.6)
                              .staggerFromTo('.list-block__item-arrow', 0.4, { x:10 },{ x:0 }, 0.6, '-=1.2')
              ;
          }
          // Enter anim slide 4
          if(destination.index == 3){
              let countries = document.querySelectorAll('.list-country__item');
              animationTlBack.set('.slide-4-cols__1', { y: 0, opacity: 1 })
                              .to('.slide-image--2, .slide-image--3', 0.1, { opacity: 1, left: '56.5%'  })
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
          // Enter anim slide 5
          if(destination.index == 4){
            if(origin.index == 5){
              animationTlBack.set('.slide-5-cols__1', { y: 0, opacity: 1 })
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-5-cols__1 .text', 0.6, { opacity:0, x:-30 },{ opacity:1, x:0 })
                              .fromTo('.slide-5-cols__1 .list-hammer__item-1', 0.6, { opacity:0, x:60 },{ opacity:1, x:0 })
                              .fromTo('.slide-5-cols__1 .list-hammer__item-2', 0.6, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .fromTo('.slide-5-cols__1 .list-hammer__item-3', 0.6, { opacity:0, x:60 },{ opacity:1, x:0 })
              ;
            } else {
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
          }
          // Enter anim slide 6
          if(destination.index == 5){
            if(origin.index == 4){
              animationTlBack.set('.slide-6-cols__1', { y: 0, opacity: 1 },0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-6-cols__1 .text', 0.6, { opacity:0, x:-60 },{ opacity:1, x:0 })
              ;
            } else {
              animationTlBack.set('.slide-6-cols__1', { y: 0, opacity: 1 },0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .set('.black-logo,.black-logo-right__owerlay', { clearProps: 'all' },0)
                              .fromTo('.slide-6-cols__1 .text', 0.6, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .fromTo('.slide-image--5', 1.5, { opacity:0, xPercent:30 },{ opacity:1,xPercent:0 })
              ;
            }
          }
          // Enter anim slide 7
          if(destination.index == 6){
              if(origin.index > 5 && origin.index < 13){
                animationTlBack.set('.slide-7-cols', {opacity: 1},0)
                                .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                                .set('.section.active', {opacity: 1},0)
                                .set('.black-logo,.black-logo-right__owerlay', { clearProps: 'all' },0)
                                //face
                                .set('.slide-image--6',{ opacity: 1 })
                                .fromTo('.slide-7-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                                .fromTo('.slide-7-cols .text-upper', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                                .staggerFromTo('.slide-7-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 );
              } else {
                animationTlBack.set('.slide-7-cols', {opacity: 1},0)
                                .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                                .set('.section.active', {opacity: 1},0)
                                
                                .set('.black-logo,.black-logo-right__owerlay', { clearProps: 'all' },0)

                                //face
                                .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                                .fromTo('.slide-7-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                                .fromTo('.slide-7-cols .text-upper', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                                .staggerFromTo('.slide-7-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 );
              }
          }
          // Enter anim slide 8
          if(destination.index == 7){
            if(origin.index > 5 && origin.index < 13){
              animationTlBack.set('.slide-8-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .set('.slide-image--6',{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-8-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-8-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            } else {
              animationTlBack.set('.slide-8-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-8-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-8-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            }
          }
          // Enter anim slide 9
          if(destination.index == 8){
            if(origin.index > 5 && origin.index < 13){
              animationTlBack.set('.slide-9-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .set('.slide-image--6',{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-9-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-9-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            } else {
              animationTlBack.set('.slide-9-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-9-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-9-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            }
          }
          // Enter anim slide 10
          if(destination.index == 9){
            if(origin.index > 5 && origin.index < 13){
              animationTlBack.set('.slide-10-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .set('.slide-image--6',{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-10-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-10-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            } else {
                animationTlBack.set('.slide-10-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-10-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-10-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            }
          }
          // Enter anim slide 11
          if(destination.index == 10){
            if(origin.index > 5 && origin.index < 13){
              animationTlBack.set('.slide-11-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .set('.slide-image--6',{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-11-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .fromTo('.slide-11-cols .text-upper', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-11-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            } else {
              animationTlBack.set('.slide-11-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-11-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .fromTo('.slide-11-cols .text-upper', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-11-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
              ;
            }
          }
          // Enter anim slide 12
          if(destination.index == 11){
            if(origin.index > 5 && origin.index < 13){
              animationTlBack.set('.slide-12-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .set('.slide-image--6',{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-12-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-12-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 );
           } else {
              animationTlBack.set('.slide-12-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                              .fromTo('.slide-12-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                              .staggerFromTo('.slide-12-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 );
            }
          }
          // Enter anim slide 13
          if(destination.index == 12){
            if(origin.index > 5 && origin.index < 13){
                animationTlBack.set('.slide-13-cols', {opacity: 1},0)
                                .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                                .set('.section.active', {opacity: 1},0)
                                //face
                                .set('.slide-image--6',{ xPercent: 0, opacity: 1 })
                                .fromTo('.slide-13-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                                .staggerFromTo('.slide-13-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
                ;
              } else {
                animationTlBack.set('.slide-13-cols', {opacity: 1},0)
                                .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                                .set('.section.active', {opacity: 1},0)
                                //face
                                .fromTo('.slide-image--6', 0.6, { xPercent: -30, opacity: 0 },{ xPercent: 0, opacity: 1 })
                                .fromTo('.slide-13-cols .services-title', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 })
                                .staggerFromTo('.slide-13-cols .arrow-list__item', 0.3, { opacity:0, x:-60 },{ opacity:1, x:0 }, 0.5 )
                ;
              }
          }
          // Enter anim slide 14
          if(destination.index == 13){
              animationTlBack.set('.slide-13-cols', {opacity: 1},0)
                              .set('.slide__overlay,#preloader-pane-2', {opacity: 0},0)
                              .set('.section.active', {opacity: 1},0)
                              //face
                              .fromTo('.slide-image--7', 2,{ opacity: 0 },{ opacity: 1 })
                              .fromTo('.slide-14-cols-2', 1, { opacity:0 },{ opacity:1 }, '-=1')
                              .fromTo('.slide-14-cols-1 .contact-title', 0.6, { x:-60,opacity:0 },{ x:0,opacity:1 }, '-=0.5')
                              .fromTo('.slide-14-cols-1 .contact-group-1', 0.6, { x:-60,opacity:0 },{ x:0,opacity:1 })
                              .fromTo('.slide-14-cols-1 .contact-group-2', 0.6, { x:-60,opacity:0 },{ x:0,opacity:1 })
                              .fromTo('.slide-14-cols-1 .contact-group-3', 0.6, { x:-60,opacity:0 },{ x:0,opacity:1 })
                              .staggerFromTo('.slide-14-cols-1 .contact-name', 0.3, { opacity:0, x:60 },{ opacity:1, x:0 }, 0.5 )
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
</script>

<style lang="scss" src="./Content.scss">
</style>
