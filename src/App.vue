<template>
  <contact-form></contact-form>
</template>

<script>
import TheForm from "./components/TheForm";

export default {
  name: 'App',
  components: {
    "contact-form": TheForm
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-image: linear-gradient(to bottom right, #5466b9, #2a8ea3);
    width: 100vw;
    height: 100vh;
  }
</style>