import Vue from 'vue'
import Router from 'vue-router'
import ElWaitingRoom from '../components/ElWaitingRoom'
import AddPlayer from '../components/AddPlayer'
import NewGame from '../components/NewGame'
import GameRoom from '../components/GameRoom'
import Home from '../components/Home'
import Shuffler from '../components/Shuffler'
import Dealer from '../components/Dealer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addplayer',
      name: 'AddPlayer',
      component: AddPlayer
    },
    {
      path: '/newgame',
      name: 'NewGame',
      component: NewGame
    },
    {
      path: '/waitingroom',
      name: 'ElWaitingRoom',
      component: ElWaitingRoom
    },
    {
      path: '/gameroom',
      name: 'GameRoom',
      component: GameRoom
    },
    {
      path: '/shuffler',
      name: 'Shuffler',
      component: Shuffler
    }
    ,
    {
      path: '/dealer',
      name: 'Dealer',
      component: Dealer
    }
  ]
})
