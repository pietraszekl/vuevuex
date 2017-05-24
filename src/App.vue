
<template>
  <div id="app">
    <p class="counter">{{counter}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    counter: function () {
      return this.$store.state.counter
    }
  }
}
</script>

<style>

html, body {
  height: 100%
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 25px rgba(0,0,0,0.08);
  transform: translate(-50%);
  width: 300px;
  height: 200px;
}

.counter {
  text-align: center;
  font-size: 45px
}
</style>
