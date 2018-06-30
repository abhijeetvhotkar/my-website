<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-alignment-center">
      <h2>LOCATION</h2>
      <a href="https://www.google.com/maps/place/4714+Aldgate+Green,+Arbutus,+MD+21227/@39.2624107,-76.7003911,17z/data=!3m1!4b1!4m5!3m4!1s0x89c81c51fa9a549b:0x6da08c420b14f0fd!8m2!3d39.262406!4d-76.698202" target="_blank"><p>Baltimore, Maryland & Ready to Relocate</p></a>
    </div>
    <div class="md-layout-item md-alignment-center">
      <h2>FIND ME HERE</h2>
      <a href="http://linkedin.com/in/abhijeetvhotkar" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="4x"></font-awesome-icon></a>
      <a href="https://github.com/abhijeetvhotkar" target="_blank"><font-awesome-icon :icon="['fab', 'github-square']" size="4x"></font-awesome-icon></a>
      <a href="https://www.facebook.com/abhi903" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="4x"></font-awesome-icon></a>
      <a href="https://twitter.com/abhijeetvhotkar" target="_blank"><font-awesome-icon :icon="['fab', 'twitter-square']" size="4x"></font-awesome-icon></a>
      <a href="mailto:abhijeetvhotkar@gmail.com" target="_blank"><font-awesome-icon icon="envelope-square" size="4x"></font-awesome-icon></a>
    </div>
    <div class="md-layout-item md-alignment-center">
      <h2>REACH ME @</h2>
      <p>+1 (443) 953-9169</p>
    </div>
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
    text-align: center;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  p {
    font-size: 1.2em;
    color: #ff5252;
  }

  a {
    margin: 10px 10px;
  }
  /* unvisited link */
  a:link {
    color: white;
  }

  /* visited link */
  a:visited {
    color: inherit;
  }

  /* selected link */
  a:active {
    color: dodgerblue;
  }


</style>
