<template>
  <div id="app">
    <navbar></navbar>
    <particles></particles>
    <h1 id="portfolio">PORTFOLIO</h1>
    <portfolio></portfolio>
    <hr>
    <resume></resume>
    <hr>
    <app-footer></app-footer>
    <copyright-footer></copyright-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Particles from "./components/Particles";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import appFooter from "./components/appFooter";
import CopyrightFooter from './components/CopyrightFooter';

export default {
  name: 'App',
  components: {
    Particles,
    Navbar,
    Portfolio,
    Resume,
    appFooter,
    CopyrightFooter
  }
}
</script>

<style lang="scss" scoped>

  #app {
    overflow: hidden;
  }

  #portfolio {
    text-align: center;
    margin-top: 50px;
  }


</style>
