<template>
  <div class="field columns is-centered">
    <div class="column">
      <img src="../assets/logo.png">
      <label class="label">Waiting for Players to Join</label>
      <div>Share this game id with your friends</div>
      <h1 class="content is-large">{{gameId}}</h1>
      <div>Current Players:</div>
      <div v-for="(player, index) in players" :key=index>{{player.name}}</div>
      <button class="button is-primary" v-on:click="startGame">Start Game</button>
    </div>
  </div>
</template>

<script>
  import axios, {AxiosResponse, AxiosError} from "axios";
  import router from '../router';

  export default {
    name: 'ElWaitingRoom',
    data: () => ({
      players: [],
      gameId: 0
    }),
    methods: {
      getPlayers() {
        axios.get("http://localhost:8082/players/" + this.gameId)
          .then((response) => {
            this.players = response.data;
          })
      },
      startGame() {
        router.replace('/gameroom')
      }
    },
    created() {
      this.gameId = this.$cookies.get("gameId");
      this.getPlayers();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
