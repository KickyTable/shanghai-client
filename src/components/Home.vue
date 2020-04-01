<template>
  <div class="field columns is-centered">
    <div class="column">
      <img src="../assets/logo.png">
      <label class="label">Shanghai Rum</label>
      <div>
        <router-link to="/addplayer">
          <button class="button is-primary">Join a Game</button>
        </router-link>
      </div>
      <div>
        <router-link to="/newgame">
          <button class="button is-primary">Start a New Game</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import axios, {AxiosResponse, AxiosError} from "axios";

  export default {
    name: 'Home',
    data: () => ({
      name: "",
    }),
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
