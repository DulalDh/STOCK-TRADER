<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" 
          v-model="quantity" 
          placeholder="Quantity"
          :class="{danger: insufficientFunds}"/>
          <small style="color:red">{{ insufficientFunds ? 'insufficient funds' : '' }}</small>
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="stockBuy" 
              :disabled=" insufficientFunds || quantity <= 0 ">
              Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    stockBuy() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>