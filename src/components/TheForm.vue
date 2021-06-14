<template>
  <div class="container">
    <header class="flex flex-wrap p-4">
      <div class="form-loader">
        load
      </div>
      <div >
        <p class="state">New York State</p>
        <h3>Request for Contact</h3>
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
}

h3 {
  font-weight: normal;
}
</style>