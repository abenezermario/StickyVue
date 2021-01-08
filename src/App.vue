<template>

  <notes/>
</template>

<script>
import Notes from './components/Sticky.vue';

export default {
  name: "App",
  components: {Notes},
  data() {
   return {
      text: "add a note hereS",
    };
  },
  methods: {
  },
  mounted() {

  },
};
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #f8f2ae;
  font-family: "Varela", sans-serif;
}
</style>


