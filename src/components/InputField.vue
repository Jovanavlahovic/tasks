<template>
  <div class="flex flex-wrap p-6 h-[3.23rem] items-center">
    <div class="order-container sm:pl-3 md:pl-5 flex items-center justify-center">
      <div class="order-number-checkbox px-4"
           :class="classObject"
      >
      </div>
      <div class="text-xs absolute">{{ orderNumber }}</div>
    </div>
    <div class="form-control pl-9 flex flex-col w-4/5 relative">
      <label class="text-gray-400 text-xs md:text-sm pb-1"> {{ label }} </label>
      <input :type="inputType" class="focus:outline-none transition" @input="onInput($event)" @blur="onInputBlur()">
      <div class="border"></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    orderNumber: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    }
  },
  computed: {
    classObject: function () {
      return {
        "loader": this.isInputLoading,
        "shadow-lg": !this.isInputLoading
      }
    }
  },
  data() {
    return {
      isInputLoading: false,
    }
  },
   methods: {
    onInput(value) {
       console.log(value);
     },
     onInputBlur() {

     }
   }
}
</script>

<style scoped>
  input {
    border-bottom: 1px solid rgba(156, 163, 175, 0.6);
    color: rgb(156, 163, 175);
  }

  .border {
    position: absolute;
    width: 0%;
    height: 0%;
    bottom: 0;
    background-color: #2094f3;
    padding: 0 0;
    transition: height 0.3s, width 0.3s 0.1s;
  }

  input:focus {
    border: none;
    color: #2094f3;
  }

  input:focus ~ .border {
    width: 90%;
    height: 2px;
  }

  .order-number-checkbox {
    width: 25px;
    height: 25px;
    padding: 10px;
    border-radius: 50%;
  }

  .text-xs {
    color: #2094f3;
  }

  .loader {
    border-top: 1px solid #3498db; /* Blue */
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>