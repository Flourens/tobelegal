<template>
  <div class="page_wrapper">
    <Content/>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'

export default {
  name: 'home',
  components: {
    Content
  }
}
</script>
