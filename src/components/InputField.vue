<template>
  <div class="flex flex-wrap p-4 md:py-6 h-[3.23rem] items-center">
    <div class="order-number-checkbox px-4">
      <div class="text-gray-400">{{ orderNumber }}</div>
    </div>
    <div class="form-control pl-7 md:pl-10 flex flex-col w-4/5 relative">
      <label class="text-gray-400 text-xs md:text-sm"> {{ label }} </label>
      <input :type="inputType" class="focus:outline-none transition" @input="onInput($event)">
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
   methods: {
    onInput(value) {
       console.log(value);
     }
   }
}
</script>

<style scoped>
  input {
    border-bottom: 1px solid rgb(156, 163, 175);
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
  }

  input:focus ~ .border {
    width: 90%;
    height: 2px;
  }

</style>