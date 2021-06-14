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
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom right, #5466b9, #2a8ea3);
  }

  #app{
    width: 100%;
    height: 100%;
  }
</style>