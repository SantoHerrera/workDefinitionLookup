<template>
  <div id="vue-instance">
    <ul>
      <listitem v-for="(item, index) in inventory" :item="item" :key="index"></listitem>
    </ul>
  </div>
</template>

<script>
var Vue = require("vue");
//import HelloWorld from './components/HelloWorld.vue'

//let key = '226a8d2c-2502-4efd-ac72-5a26eb317695'

const listItem = {
  props: ["item"],
  computed: {
    price() {
      return this.item.price.toFixed(2);
    }
  },
  template: "<li><b>{{ item.name }}</b>: {{ price }}</li>"
};

const VM = new Vue({
  el: "#vue-instance",

  components: {
    listitem: ListItem
  },

  data: {
    inventory: [
      { name: "MacBook Air", price: 1000 },
      { name: "MacBook Pro", price: 1800 },
      { name: "Lenovo W530", price: 1400 },
      { name: "Acer Aspire One", price: 300 }
    ]
  }
});
</script>
