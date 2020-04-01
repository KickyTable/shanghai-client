<template>
  <div class="field columns is-centered">
    game room
  </div>
</template>

<script>
  import axios, {AxiosResponse, AxiosError} from "axios";

  export default {
    name: 'GameRoom',
    data: () => ({
      players: [],
      gameId: 0
    }),
    methods: {
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
