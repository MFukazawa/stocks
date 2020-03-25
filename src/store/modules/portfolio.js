const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  // Destructured from Stock.vue const order
  BUY_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (stockPrice * quantity <= state.funds) {
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        });
      }
      state.funds -= stockPrice * quantity;
    } else {
      alert("You don't have enough funds to do that!");
    }
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);

    console.log(record.quantity);
    console.log(quantity);

    if (quantity < record.quantity) {
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      state.funds += stockPrice * quantity;
    } else {
      alert("You don't have that many stocks to sell!");
    }
  }
};

const actions = {
  // buyStock exists in stocks.js module
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
