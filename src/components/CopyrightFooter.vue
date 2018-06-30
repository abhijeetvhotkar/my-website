<template>
  <div class="md-layout md-gutter md-alignment-center">
    <h4>Made with <span><font-awesome-icon :icon="['fab', 'gratipay']"></font-awesome-icon></span> and VueJS</h4>
  </div>
</template>

<script>
export default {
  name: 'appFooter',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .md-layout {
   background-color: #424242;
  }
</style>
