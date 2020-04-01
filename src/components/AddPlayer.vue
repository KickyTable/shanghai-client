<template>
  <div class="field columns is-centered">
    <div class="column">
      <img src="../assets/logo.png">
      <label class="label">Join a Game!</label>
      <div class="control">
        <input v-model="name" class="input" type="text" placeholder="Enter your name">
      </div>
      <div class="control">
        <input v-model="gameId" class="input" type="text" placeholder="Enter your game id">
      </div>
      <p class="help is-danger">{{error}}</p>
      <div>
        <button class="button is-primary" v-on:click="newPlayer">Let's Go!!!</button>
      </div>
      <div>
        <router-link to="/newGame">
        <button class="button">Start a Game</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios, { AxiosResponse, AxiosError } from "axios";
  import router from '../router';
  export default {
    name: 'AddPlayer',
    data: () => ({
      name: "",
      gameId: "",
      error: ""
    }),
    methods: {
      newPlayer() {
          if (this.name === "" || this.gameId === "") {
            alert("Enter your name and game ID");
            return;
          }
          axios.post("http://localhost:8082/player", {
            name: this.name,
            gameId: this.gameId,
            score: 0
          })
            .then((response) => {
              this.$cookies.set("gameId", this.gameId)
              router.replace('/waitingroom')
            }).catch(() => {
              this.error = "No available game found with this id"
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
