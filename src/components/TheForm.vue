<template>
  <div class="container">
    <header class="flex flex-wrap p-4 md:pl-6 items-center shadow-md rounded">
      <div class="loader-container flex justify-center items-center">
        <circle-progress
            class="loader"
            :percent="40"
            :size="50"
            :border-width="5"
            :border-bg-width="5"
            :empty-color="emptyColor"
            fill-color="white"
            :hide-text="false"
        />
        <p class="absolute progress-value">50%</p>
      </div>
      <div class="pl-4 md:pl-6">
        <p class="state">New York State</p>
        <h1>Request for Contact</h1>
      </div>
    </header>
    <main >
      <form class="shadow-md rounded">
        <input-field input-type="text" label="First Name" order-number="1" v-model="firstName"/>
        <input-field input-type="text" label="Last Name" order-number="2" v-model="lastName"/>
        <input-field input-type="text" label="Email Adress" order-number="3" v-model="email"/>
        <radio-buttons></radio-buttons>
      </form>
    </main>
  </div>
</template>

<script>
import CircleProgress from "vue3-circle-progress";
import InputField from "./InputField";
import RadioButtons from "./RadioButtons";

export default {
  name: "Form",
  components: {
    CircleProgress,
    InputField,
    RadioButtons
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  computed: {
    emptyColor() {
      return "rgba(255,255,255, 0.3)";
    }
  }
}
</script>

<style scoped>
  .container {
    position: relative;
    width: 60%;
    margin: 0 auto;
    top: 5%;
  }

  header {
    background-color: #2094f3;
    height: 100px;
  }

  .state {
    font-size: .7rem;
  }

  h1 {
    font-size: 1rem;
  }

  .loader {
    width: 40px;
    height: 40px;
    position: absolute;
  }


  .progress-value {
    font-size: .7rem;
  }

  @media(max-width: 860px) {
    .container {
      width: 80%;
    }
  }

  @media (min-width: 860px) {
    .loader {
      width: 60px;
      height: 60px;
    }
    .progress-value {
      font-size: .9rem;
    }

    .state {
      font-size: .8rem;
    }

    h1 {
      font-size: 1.2rem;
    }
  }

  form {
    background-color: #fff;
  }

</style>