<template src="./Content.html">
</template>

<script>
export default {
  name: 'Content',
  props: {
    msg: String
  },
  data() {
    return {
      options: {
        licenseKey: 'F1F7C056-F79543AF-9D4C42D2-E43F5FDE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14'],
        // sectionsColor: ['#1A2730', '#1A2730', '#1A2730'],

        navigation: true,
        navigationPosition: 'right',
        css3: true,

        fadingEffect: true,
        verticalCentered: true,

      },
    }
  }
}
</script>

<style lang="scss" src="./Content.scss">
</style>
