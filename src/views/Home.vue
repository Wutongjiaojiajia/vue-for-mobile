<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button type="primary">确定</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/local/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
