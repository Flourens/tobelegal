const handleOrientation = {
  methods: {
    checkOrientation(status) {
      if(status !== 'first'){
        location.reload();
      }
      this.$store.commit(
        'DETECT_ORIENTATION',
        Math.abs(window.orientation) === 90
      );
    }
  },
  mounted() {
    this.checkOrientation('first');
    window.addEventListener(
      'orientationchange',
      () => {
        this.checkOrientation();
      },
      false
    );
  }
};

export default handleOrientation;
