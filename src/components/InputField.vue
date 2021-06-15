<template>
  <div class="flex flex-wrap px-4 py-6 h-[3.23rem] items-center">
    <form-control-order-number
        :class-object="classObject"
        :display-order-number="displayOrderNumber"
        :display-checked="displayChecked"
        :order-number="orderNumber"
    ></form-control-order-number>
    <div class="form-control pl-9 flex flex-col w-4/5 relative">
      <label :for="inputType" :class="labelColor" class="text-gray-200 text-xs md:text-sm pb-1"> {{ label }}
        <span class="text-red-500">*</span>
        <small class="text-red-500" v-if="isInputInvalid">This field cannot be empty</small>
      </label>
      <input
          :type="inputType"
          :name="inputType"
          class="focus:outline-none transition"
          @input="onInput($event)"
          @blur="onInputBlur($event)"
          @focus="onInputFocus()"
          ref="input"
      >
      <div class="border"></div>
    </div>
  </div>
</template>

<script>
import FormControlOrderNumber from "./FormControlOrderNumber";

export default {
  components: {
    FormControlOrderNumber
  },
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
  emits: ['update:modelValue'],
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
    onInput(input) {
       this.$emit('update:modelValue', input.target.value);
     },
     onInputBlur(input) {
        this.isInputLoading = true;
        this.isInputFocused = false;

       if(input.target.value === '') {
         this.isInputInvalid = true;
         this.$refs.input.focus();
         return;
       }

       setTimeout(() => {
          this.isInputLoading = false;
          this.displayOrderNumber = false;
          this.displayChecked = true;
         this.isInputInvalid = false;
       }, 1700);
     },
     onInputFocus() {
      this.isInputFocused = true;
     },
   }
}
</script>

<style scoped>
  input {
    border-bottom: 1px solid rgba(156, 163, 175, 0.6);
    color: rgb(156, 163, 175);
  }

  label {
    color: gray;
  }

  small {
    font-size: .7rem;
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

  label, input:focus {
    opacity: .7;
  }

  input:focus label {
    color: #2094f3;
  }

  input:focus ~ .border {
    width: 85%;
    height: 2px;
  }

  .labelColor{
    color: #2094f3;
  }

  small {
    font-size: .6rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>