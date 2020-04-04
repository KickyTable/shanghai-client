<template>
  <b-container>
    <div class='circle-container'>
      <div v-if="!shuffling" class="point center-of-circle">
        <b-row align-content="center" align-h="center">
          <button v-on:click="deal(11)">deal</button>
        </b-row>
        <b-row align-content="center" align-h="center">
          <div v-for="card in deck" :key="card.id" class="card-in-deck" :class="card.color">
            <img src="../assets/card_back.png">
          </div>
        </b-row>
      </div>

      <div class="your-place point" :class="degs[0]">
        YOU ({{players[you].name}})
        <b-row v-if="dealing" align-content="center" align-h="center">
          <div class="hand">
            <div v-for="card in players[you].hand" :key="card.id" class="card-in-hand" :class="card.color">
              <img src="../assets/card_back.png">
            </div>
          </div>
        </b-row>
      </div>

      <div v-for="i in playerOrder" :key="i">
        <div v-if="i!==0" class="player-place point" :class="degs[i]">
          {{players[playerOrder[i]].name}}
          <div v-if="players[playerOrder[i]].dealer">DEALER</div>
          <b-row align-content="center" align-h="center">
            <div class="hand">
              <div v-for="card in players[playerOrder[i]].hand" :key="card.id" class="card-in-hand" :class="card.color">
                <img src="../assets/card_back.png">
              </div>
            </div>
          </b-row>
        </div>

      </div>
    </div>

    <b-row v-if="!dealing" class="your-hand" align-content="center" align-h="center">
      <div v-for="card in players[you-1].hand" :key="card.id" class="card">
        {{card.id}}
      </div>
    </b-row>


    <b-modal v-model="shuffling" hide-header hide-footer>
      <Shuffler @doneShuffling="doneShuffling"></Shuffler>
    </b-modal>


  </b-container>
</template>
<script>

  import Shuffler from "./Shuffler";

  export default {
    name: "Dealer",
    components: {Shuffler},
    data: () => ({
      deck: [],
      numDecks: 2,
      numPlayers: 6,
      playerOrder: [],
      dealOrder: [],
      dealer: 5,
      you: 1,
      degs: [],
      shuffling: true,
      dealing: false,
      players: [
        {name: "spence", id: 0, num: 0, dealer: false, hand: []},
        {name: "gin", id: 1, num: 1, dealer: false, hand: []},
        {name: "shan", id: 2, num: 2, dealer: false, hand: []},
        {name: "emily", id: 3, num: 3, dealer: false, hand: []},
        {name: "emma", id: 4, num: 4, dealer: false, hand: []},
        {name: "ben", id: 5, num: 5, dealer: true, hand: []}]
    }),
    methods: {
      deal(n) {
        this.dealing = true;
        if (n === 0) {
          this.dealing = false;
          return;
        }

        this.dealToPlayers(this.numPlayers, () => {
          setTimeout(() => this.deal(n - 1), 0);
        });
      },
      dealToPlayers(n, callback) {
        if (n === 0) {
          return callback ? callback() : undefined;
        }
        let card = this.deck.pop();
        if (!card) return;
        let hand = this.players[this.dealOrder[Math.abs(n - this.numPlayers)]].hand;
        hand.push(card);
        this.players[this.dealOrder[Math.abs(n - this.numPlayers)]].hand = hand;
        setTimeout(() => this.dealToPlayers(n - 1, callback), 100);
      },
      getOrder() {
        let i = this.you;
        while (i < this.numPlayers) {
          this.playerOrder.push(i);
          i++;
        }
        i = 0;
        while (i < this.you) {
          this.playerOrder.push(i);
          i++;
        }
        console.log(this.playerOrder)
      },
      getDealOrder() {
        let i = this.dealer + 1;
        while (i < this.numPlayers) {
          this.dealOrder.push(i);
          i++;
        }
        i = 0;
        while (i <= this.dealer) {
          this.dealOrder.push(i);
          i++;
        }
        console.log(this.dealOrder)
      },
      getDegs() {
        if (this.numPlayers === 4) {
          this.degs = ["deg90", "deg180", "deg270", "deg0"]
        } else if (this.numPlayers === 5) {
          this.degs = ["deg90", "deg150", "deg210", "deg330", "deg30"]
        } else if (this.numPlayers === 6) {
          this.degs = ["deg90", "deg150", "deg210", "deg270", "deg330", "deg30"]
        }
      },
      doneShuffling(value) {
        this.deck = value;
        this.shuffling = false;
      }

    },
    created() {
      this.getOrder();
      this.getDealOrder();
      this.getDegs();
    }
  };
</script>
<style>

  .dealer-marker {
    border: green 1px solid;
  }

  .hand {
    margin-right: 30px;
    margin-top: 30px;
  }

  .card-in-hand {
    width: 30px;
    height: 45px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
    position: absolute;
    transform-origin: center 120%;
  }

  .card-in-hand:nth-child(1) {
    transform: rotate(-25deg);
  }

  .card-in-hand:nth-child(2) {
    transform: rotate(-20deg);
  }

  .card-in-hand:nth-child(3) {
    transform: rotate(-15deg);
  }

  .card-in-hand:nth-child(4) {
    transform: rotate(-10deg);
  }

  .card-in-hand:nth-child(5) {
    transform: rotate(-5deg);
  }

  .card-in-hand:nth-child(6) {
    transform: rotate(0deg);
  }

  .card-in-hand:nth-child(7) {
    transform: rotate(5deg);
  }

  .card-in-hand:nth-child(8) {
    transform: rotate(10deg);
  }

  .card-in-hand:nth-child(9) {
    transform: rotate(15deg);
  }

  .card-in-hand:nth-child(10) {
    transform: rotate(20deg);
  }

  .card-in-hand:nth-child(11) {
    transform: rotate(25deg);
  }

  .card-in-hand:nth-child(12) {
    transform: rotate(30deg);
  }

  .card-in-hand:nth-child(13) {
    transform: rotate(35deg);
  }

  .card-in-hand:nth-child(14) {
    transform: rotate(40deg);
  }

  .card-in-hand:nth-child(15) {
    transform: rotate(45deg);
  }

  .card-in-hand:nth-child(16) {
    transform: rotate(50deg);
  }

  .card-in-hand:nth-child(17) {
    transform: rotate(55deg);
  }

  .card-in-hand:nth-child(18) {
    transform: rotate(60deg);
  }

  .card {
    width: 50px;
    height: 75px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
  }

  .card-in-deck {
    width: 50px;
    height: 75px;
    float: left;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 5px;
    border-radius: 2px;
    border: solid white .07pt;
    position: absolute;
  }

  .player-place {
    overflow-wrap: break-spaces;
    border-radius: 5px;
    border: solid black 1px;
    background-color: lightgrey;
  }

  .your-place {
    border-radius: 5px;
    border: solid black 1px;
    margin-top: 50px;
    background-color: gray;
  }

  .your-hand {
    height: 100px;
    border-radius: 5px;
    border: solid black 1px;
    margin-top: 100px;
    background-color: gray;
  }

  .card_color_red {
    background-color: red;
  }

  .card_color_blue {
    background-color: blue;
  }

  .center-of-circle {
    -webkit-transform: translate(0em);
    -moz-transform: translate(0em);
    -ms-transform: translate(0em);
    -o-transform: translate(0em);
    transform: translate(0em);
  }

  .circle-container {
    position: relative;
    width: 25em;
    height: 25em;
    padding: 2.8em; /*= 2em * 1.4 (2em = half the width of an img, 1.4 = sqrt(2))*/
    border: dashed 1px;
    border-radius: 50%;
    margin: 100px auto 0;
  }

  .point {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10em;
    height: 10em;
    margin: -5em; /* 2em = 4em/2 */ /* half the width */
  }

  :root {
    --to-0: translate(12.5em);
    --to-180: translate(-12.5em);
  }

  .deg0 {
    -webkit-transform: var(--to-0);
    -moz-transform: var(--to-0);
    -ms-transform: var(--to-0);
    -o-transform: var(--to-0);
    transform: var(--to-0);
  }

  .deg30 {
    -webkit-transform: rotate(30deg) var(--to-0) rotate(-30deg);
    -moz-transform: rotate(30deg) var(--to-0) rotate(-30deg);
    -ms-transform: rotate(30deg) var(--to-0) rotate(-30deg);
    -o-transform: rotate(30deg) var(--to-0) rotate(-30deg);
    transform: rotate(30deg) var(--to-0) rotate(-30deg);
  }

  .deg90 {
    -webkit-transform: rotate(90deg) var(--to-0) rotate(-90deg);
    -moz-transform: rotate(90deg) var(--to-0) rotate(-90deg);
    -ms-transform: rotate(90deg) var(--to-0) rotate(-90deg);
    -o-transform: rotate(90deg) var(--to-0) rotate(-90deg);
    transform: rotate(90deg) var(--to-0) rotate(-90deg);
  }

  .deg45 {
    -webkit-transform: rotate(45deg) var(--to-0) rotate(-45deg);
    -moz-transform: rotate(45deg) var(--to-0) rotate(-45deg);
    -ms-transform: rotate(45deg) var(--to-0) rotate(-45deg);
    -o-transform: rotate(45deg) var(--to-0) rotate(-45deg);
    transform: rotate(45deg) var(--to-0) rotate(-45deg);
  }

  .deg135 {
    -webkit-transform: rotate(135deg) var(--to-0) rotate(-135deg);
    -moz-transform: rotate(135deg) var(--to-0) rotate(-135deg);
    -ms-transform: rotate(135deg) var(--to-0) rotate(-135deg);
    -o-transform: rotate(135deg) var(--to-0) rotate(-135deg);
    transform: rotate(135deg) var(--to-0) rotate(-135deg);
  }

  .deg150 {
    -webkit-transform: rotate(150deg) var(--to-0) rotate(-150deg);
    -moz-transform: rotate(150deg) var(--to-0) rotate(-150deg);
    -ms-transform: rotate(150deg) var(--to-0) rotate(-150deg);
    -o-transform: rotate(150deg) var(--to-0) rotate(-150deg);
    transform: rotate(150deg) var(--to-0) rotate(-150deg);
  }

  .deg180 {
    -webkit-transform: var(--to-180);
    -moz-transform: var(--to-180);
    -ms-transform: var(--to-180);
    -o-transform: var(--to-180);
    transform: var(--to-180);
  }

  .deg225 {
    -webkit-transform: rotate(225deg) var(--to-0) rotate(-225deg);
    -moz-transform: rotate(225deg) var(--to-0) rotate(-225deg);
    -ms-transform: rotate(225deg) var(--to-0) rotate(-225deg);
    -o-transform: rotate(225deg) var(--to-0) rotate(-225deg);
    transform: rotate(225deg) var(--to-0) rotate(-225deg);
  }

  .deg210 {
    -webkit-transform: rotate(210deg) var(--to-0) rotate(-210deg);
    -moz-transform: rotate(210deg) var(--to-0) rotate(-210deg);
    -ms-transform: rotate(210deg) var(--to-0) rotate(-210deg);
    -o-transform: rotate(210deg) var(--to-0) rotate(-210deg);
    transform: rotate(210deg) var(--to-0) rotate(-210deg);
  }

  .deg270 {
    -webkit-transform: rotate(270deg) var(--to-0) rotate(-270deg);
    -moz-transform: rotate(270deg) var(--to-0) rotate(-270deg);
    -ms-transform: rotate(270deg) var(--to-0) rotate(-270deg);
    -o-transform: rotate(270deg) var(--to-0) rotate(-270deg);
    transform: rotate(270deg) var(--to-0) rotate(-270deg);
  }

  .deg315 {
    -webkit-transform: rotate(315deg) var(--to-0) rotate(-315deg);
    -moz-transform: rotate(315deg) var(--to-0) rotate(-315deg);
    -ms-transform: rotate(315deg) var(--to-0) rotate(-315deg);
    -o-transform: rotate(315deg) var(--to-0) rotate(-315deg);
    transform: rotate(315deg) var(--to-0) rotate(-315deg);
  }

  .deg330 {
    -webkit-transform: rotate(330deg) var(--to-0) rotate(-330deg);
    -moz-transform: rotate(330deg) var(--to-0) rotate(-330deg);
    -ms-transform: rotate(330deg) var(--to-0) rotate(-330deg);
    -o-transform: rotate(330deg) var(--to-0) rotate(-330deg);
    transform: rotate(330deg) var(--to-0) rotate(-330deg);
  }


</style>
