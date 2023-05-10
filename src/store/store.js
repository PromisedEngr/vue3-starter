import { createStore } from 'vuex'
import account from './modules/account'
import bets from './modules/bets'


const store = createStore({
    modules: {
        account,
        bets
    },
  })
export default store