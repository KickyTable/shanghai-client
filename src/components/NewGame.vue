<template>
  <div class="field columns is-centered">
    <div class="column">
      <img src="../assets/logo.png">
      <label class="label">Start a Game!</label>
      <div class="control">
        <input v-model="name" class="input" type="text" placeholder="Enter your name">
      </div>
      <div>
        <button class="button is-primary" v-on:click="newGame">Start</button>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import axios, { AxiosResponse, AxiosError } from "axios";

  export default {
    name: 'NewGame',
    data: () => ({
      name: "",
    }),
    methods: {
      newGame() {
         console.log(process.env.VUE_APP_URL)
          if (this.name === "") {
            alert("Enter your name");
            return;
          }
          axios.post("/api/game", {
            name: this.name
          })
            .then((response) => {
                this.$cookies.set("gameId", response.data.id)
                router.replace('/waitingroom')
            })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
