<template>
  <div class="container">
    <vue-particles
      color="#8b7d6b"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="5"
      linesColor="#eedfcc"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>
    <!--<vue-typer-->
      <!--class="centered"-->
      <!--:text='["Arya Stark","Jon Snow","Daenerys Targaryen","Melisandre","Tyrion Lannister"]'-->
      <!--:repeat='Infinity'-->
      <!--:shuffle='true'-->
      <!--initial-action='typing'-->
      <!--:pre-type-delay='70'-->
      <!--:type-delay='70'-->
      <!--:pre-erase-delay='2000'-->
      <!--:erase-delay='250'-->
      <!--erase-style='backspace'-->
      <!--:erase-on-complete='false'-->
      <!--caret-animation='smooth'>-->
    <!--</vue-typer>-->
  </div>
</template>

<script>


export default {
  name: 'Particles',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

  .vue-typer {
    font-family: "Segoe UI";
    font-size: 5em;
    color: #ffffff;
    .custom.char {
      /* Styles for each character
         e.g. color, background-color */
      font-color: #009688;
      background-color: #009688;

      &.typed {
        /* Styles specific to typed characters
           i.e. characters to the left of the caret */
        color: #009688;
        background-color: #009688;
      }
      &.selected {
        /* Styles specific to selected characters
           i.e. characters to the right of the caret while VueTyper's
                'eraseStyle' is set to a selection-based style */
      }
      &.erased {
        /* Styles specific to erased characters
           i.e. characters to the right of the caret while VueTyper's
                'eraseStyle' is set to a non-selection-based style */
      }
    }
  }
</style>
