<template>
  <div>
    <h1>My Resume</h1>
    <md-button class="md-dense md-raised md-primary" href="https://drive.google.com/file/d/1cY4BavxjDWy3pTIW4bhCs6ticM1aJRGh/view?usp=sharing" target="_blank">Click here</md-button>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .md-button {
    width: 150px;
    height: 50px;
    font-size: medium;
  }
  div{
    text-align: center;
    height: 300px;
  }
  h1 {
    margin-top: 200px;
    margin-bottom: 50px;
  }
</style>
