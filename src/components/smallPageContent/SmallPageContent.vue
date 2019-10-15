<template>
  <div>
    <div class="small__wrapp">
      <div class="small__content">
         <div class="small__col">
            <div class="small__col-1">
              <p class="small__services" v-html="localization.slide_15.text_1">комплексное<br>сопровождение<br>бизнеса</p>
              <p class="small__services" v-html="localization.slide_15.text_2">судебная<br>практика</p>
            </div>
             <div class="small__col-2">
               <img v-if="this.$store.state.userAgent.userLanguage === 'ru'" src="../img/code-ru.gif" alt="" class="small_code">
               <img v-else-if="this.$store.state.userAgent.userLanguage === 'uk'" src="../img/code-uk.gif" alt="" class="small_code">
               <img v-else src="../img/code-en.gif" alt="" class="small_code">
            </div>
            <div class="small__col-3">
              <p class="small__position" v-html="localization.slide_15.text_3">Адвокат</p>
              <p class="small__name" v-html="localization.slide_15.text_4">Евгений<br>Воробей</p>
            </div>  
        </div>
        <p class="small__text" v-html="localization.slide_15.text_5">Не смотря на безоговорочную законность данных действий, я настоятельно рекомендую Вам увеличить размер окна браузера, для полноценного просмотра сайта!</p>
      </div>
    </div>
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
    localization(){
      return this.$store.getters.localizationState[this.userAgent.userLanguage] || this.$store.getters.localizationState['en'];
    }
  },
  methods:{},
  mounted(){},
}

</script>

<style lang="scss">
  .small__wrapp{
    width: 100%;
    height: 100vh;
    background-color: #1A2730;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index: 9999;
  }
  .small__content{
    margin: 30px;
  }
  .small__col{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .small__col-1{
    width: 32%;
    @include media ("<550px"){
     display: none;
    }
    @include media ("height<300px"){
     display: none;
    }
  }
  .small__col-2{
    width: 30%;
    img{
      width: 100%;
      height: auto;
      max-width: 200px;
      margin: 0 auto;
      display: block;
    }
    @include media ("<550px"){
     width: 100%;
     img{
       max-width: 180px;
     }
    }
    @include media ("height<300px"){
     width: 100%;
     img{
       max-width: 180px;
     }
    }
  }
  .small__col-3{
    width: 30%;
    @include media ("<550px"){
     display: none;
    }
    @include media ("height<300px"){
     display: none;
    }
  }
  .small__services{
    @include bebas-regular;
    background: -webkit-linear-gradient(90deg, #E9C0A0 -29.04%, #E5BB9C -11.71%, #D8AC90 9.05%, #C3947E 31.48%, #AB7968 51.12%, #BD8C76 53.66%, #D0A084 57.25%, #DDAE8E 61.34%, #E5B794 66.37%, #E7B996 74.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
    line-height: 1.5;
    text-align: right;
    letter-spacing: 0.1em;
    margin-top: 20px;
  }
  .small__position{
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.05em;
    @include montserrat-regular;
    background: -webkit-linear-gradient(90deg, #E9C0A0 -29.04%, #E5BB9C -11.71%, #D8AC90 9.05%, #C3947E 31.48%, #AB7968 51.12%, #BD8C76 53.66%, #D0A084 57.25%, #DDAE8E 61.34%, #E5B794 66.37%, #E7B996 74.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 35px;
    margin-bottom: 10px;
    text-align: left;
  }

  .small__name{
    @include bebas-bold;
    background: -webkit-linear-gradient(90deg, #E9C0A0 -29.04%, #E5BB9C -11.71%, #D8AC90 9.05%, #C3947E 31.48%, #AB7968 51.12%, #BD8C76 53.66%, #D0A084 57.25%, #DDAE8E 61.34%, #E5B794 66.37%, #E7B996 74.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 52px;
    line-height: 1.1;
    text-align: left;
    padding-top: 3px;
    margin-top: 10px;
    margin-bottom: 0px;

  }
  .small__text{
    @include montserrat-regular;
    width: 100%;
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: $grey;
    width: 100%;
    margin-top: 10vh;
    max-width: 600px;
    text-align: center;
    @include media ("<550px"){
     display: none;
    }
     @include media ("height<300px"){
     display: none;
    }
  }
</style>
