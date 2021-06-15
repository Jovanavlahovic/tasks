<template>
    <div class="order-container sm:pl-3 md:pl-5 flex items-center justify-center">
      <div class="order-number-checkbox px-4" :class="classObject"></div>
      <div class="text-xs absolute order-number" v-if="displayOrderNumber">{{ orderNumber }}</div>
      <div class="absolute " v-if="displayChecked"><font-awesome-icon icon="check"></font-awesome-icon></div>
    </div>
</template>

<script>
export default {
  name: 'FormControlOrderNumber',
  props: {
    classObject: {
      type: Object,
      required: true
    },
    displayOrderNumber: {
      type: Boolean,
      required: true
    },
    displayChecked: {
      type: Boolean,
      required: true
    },
    orderNumber: {
      type: String,
      required: true
    }
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
  width: 95%;
  height: 2px;
}

@media (max-width: 860px) {

}

.order-number-checkbox {
  width: 25px;
  height: 25px;
  padding: 10px;
  border-radius: 50%;
}

.order-number, .checked, .labelColor{
  color: #2094f3;
}

.loader {
  border-top: 1px solid #3498db; /* Blue */
  animation: spin 2s linear infinite;
}

.done {
  background-color: #2094f3;
  opacity: .9;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>