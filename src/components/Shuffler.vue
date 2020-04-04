<template>
  <div id="app">
    <transition-group :name="shuffleSpeed" tag="div" class="deck">
      <div v-for="card in cards" :key="card.id" class="card" :class="card.color">
        <img src="../assets/card_back.png">
      </div>
    </transition-group>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "Shuffler",
    data: () => ({
      cards: [],
      suitColor: {
        blue: "black",
        red: "red"
      },
      shuffleSpeed: "shuffleFast",
      numDecks: 2,
    }),
    methods: {
      displayInitialDeck() {
        let id = 1;
        this.cards = [];

        for (let i = 0; i < this.numDecks * 52; i+=2) {
          let card1 = {
            id : id,
            color: "card_color_red"
          };
          id++;
          let card2 = {
            id : id,
            color: "card_color_blue"
          };
          id++;
          this.cards.push(card1);
          this.cards.push(card2);
        }

      },
      shuffleDeck(n) {
        if (n === 0) {
          this.$emit ("doneShuffling", this.cards);
          return;
        }
        for (let i = this.cards.length - 1; i > 0; i--) {
          let randomIndex = Math.floor(Math.random() * i);

          let temp = this.cards[i];
          Vue.set(this.cards, i, this.cards[randomIndex]);
          Vue.set(this.cards, randomIndex, temp);
        }

        setTimeout(() => this.shuffleDeck(n - 1), 750);
      },
    },
    created() {
      this.displayInitialDeck();
      this.shuffleDeck(5);
    }
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700");

  html,
  body,
  #app {
    height: 100%;
  }


  .fas {
    padding-left: 5px;
  }

  .deck {
    margin-left: 30px;
    /*padding-top: 30px;*/
  }

  .card {
    width: 30px;
    height: 45px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 2px;
  }

  .card_color_red {
    background-color: red;
  }

  .card_color_blue {
    background-color: blue;
  }

  .red {
    color: #ff0000;
  }

  .black {
    color: #000;
  }

  .shuffleFast-move {
    transition: transform 0.5s;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 1210px) {
    .deck {
      position: initial;
      top: 0;
    }
  }

</style>
