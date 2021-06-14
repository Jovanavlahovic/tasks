<template>
  <div class="container">
    <header class="flex flex-wrap p-4 items-center">
      <div class="form-loader w-1/3">
        load
      </div>
      <div class="w-2/3">
        <p class="state">New York State</p>
        <h1>Request for Contact</h1>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: "Form",
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 60%;
    margin: 0 auto;
    top: 10%;
  }

  header {
    background-color: #2094f3;
    height: 100px;
  }

  .state {
    font-size: .8rem;
  }

  h1 {
    font-size: 1.2rem;
  }
</style>