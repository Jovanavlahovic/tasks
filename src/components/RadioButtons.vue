<template>
  <div class="flex flex-wrap px-4 pb-6 h-[3.23rem] items-center">
    <form-control-order-number
        order-number="4"
        :class-object="classObject"
        :display-order-number="displayOrderNumber"
        :display-checked="displayChecked"
    ></form-control-order-number>
    <div class="form-control pl-9 flex flex-col w-4/5 relative">
      <div class="text-gray-400 text-xs">What is the best time to contact you?</div>
      <div class="pt-2">
        <label class="radio">
          <input type="radio" name="r" value="monday">
          <span class="text-gray-500" @click="inputChecked('monday')">Monday 3pm</span>
        </label>
        <label class="radio">
          <input type="radio" name="r" value="tuesday">
          <span  class="text-gray-500" @click="inputChecked('tuesday')">Tuesday 3px</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import FormControlOrderNumber from "./FormControlOrderNumber";

export default {
  name: 'RadioButton',
  components: {
    FormControlOrderNumber
  },
  computed: {
    classObject() {
      return {
        "loader": this.isInputLoading,
        "shadow-lg": !this.isInputLoading,
        "done": this.displayChecked
      }
    },
    labelColor() {
      return this.isInputFocused ? 'labelColor' : '';
    }
  },
  data() {
    return {
      isInputLoading: false,
      displayOrderNumber: true,
      displayChecked: false,
      isInputFocused: false,
      isInputInvalid: false
    }
  },
  methods: {
    inputChecked(value) {
      this.isInputLoading = true;
      console.log(value);
      setTimeout(() => {
        this.isInputLoading = false;
        this.displayOrderNumber = false;
        this.displayChecked = true;
      }, 1700);
    }
  }
}
</script>

<style scoped>
  .radio {
    margin: 6px 0;
    display: block;
    cursor: pointer;
    font-size: .8rem;
  }

  .radio input {
    display: none;
  }
  .radio input + span {
    line-height: 15px;
    height: 22px;
    padding-left: 22px;
    display: block;
    position: relative;
  }
  .radio input + span:not(:empty) {
    padding-left: 30px;
  }
  .radio input + span:before, .radio input + span:after {
    content: '';
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 50%;
    left: 0;
    top: 0;
    position: absolute;
  }
  .radio input + span:before {
    background: #d1d7e3;
    transition: background 0.2s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
  }
  .radio input + span:after {
    background: #fff;
    transform: scale(0.78);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
  }
  .radio input:checked + span:before {
    transform: scale(1.04);
    background: #5d9bfb;
  }
  .radio input:checked + span:after {
    transform: scale(0.4);
    transition: transform 0.3s ease;
  }
  .radio:hover input + span:before {
    transform: scale(0.92);
  }
  .radio:hover input + span:after {
    transform: scale(0.74);
  }
  .radio:hover input:checked + span:after {
    transform: scale(0.4);
  }
</style>