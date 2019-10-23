import windowSize from "get-window-size";
import _ from "lodash";

const handleResize = {
  data() {
    return {
      previousSize: '',
      loaded: false
    }
  },
  methods: {
    handleResize: _.throttle(function resize() {
      this.$store.commit("UPDATE_WINDOW_PARAMS", {
        width: windowSize().width,
        height: windowSize().height
      });
      //this.loaded = true;
      if(windowSize().width < 1024){
        if( this.previousSize == 'desktop'){
          location.reload();
          console.log('132');
          this.previousSize = 'mobile';
        }
      } else {
        if( this.previousSize == 'mobile'){
          location.reload();
          console.log('132');
          this.previousSize = 'desktop';
        }
      }
    }, 300)
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if(windowSize().width < 1024){
      this.previousSize = 'mobile';
    } else {
      this.previousSize = 'desktop';
    }
  },
};

export default handleResize;
