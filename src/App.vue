<template>
  <div id="app">
    <input type="text" id="searchThis" />
    <button v-on:click="clearSearchBar">submit</button>

    <p>Definition's</p>
    <ol>
      <li v-for="(item, index ) in inventory" :item="item" v-bind:key="index">{{ item.definition }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "App",
  text: "Search Word",
  definition: "fuck",
  jsonKey: "226a8d2c-2502-4efd-ac72-5a26eb317695",
  data: function() {
    return {
      inventory: [
        { name: "MacBook Air", price: 1000, definition: "no word given yet" }
      ]
    };
  },
  methods: {
    clearSearchBar: function() {
      let inputText = document.getElementById("searchThis");
      //console.log(inputText.value)

      const word = inputText.value;

      this.text = inputText.value;
      inputText.value = "";

      
      this.getWordDefinition(word);
    },
    newURL: function(word, ref, key) {
      let url =
        "https://dictionaryapi.com/api/v3/references/" +
        ref +
        "/json/" +
        word +
        "?key=" +
        key;

      return url;
    },
    getWordDefinition: function(word) {
      let requestURL = this.newURL(
        word,
        "spanish",
        "226a8d2c-2502-4efd-ac72-5a26eb317695"
      );

      let request = new XMLHttpRequest();
      request.open("GET", requestURL);

      request.responseType = "json";
      request.send();

      request.onload = function() {
        const allDefinitions = request.response;

        console.log(allDefinitions, " ignore this")

        console.log("workks? ", this.inventory[0].name);

        //console.log(allDefinitions[0].shortdef)
        //console.log(allDefinitions);
        //console.log(this.data.inventory);
      };

      console.log("workks? ", this.inventory[0].name);
    }
  }
};
/*
<?php

  // This function grabs the definition of a word in JSON format.
  function grab_json_definition ($word, $ref, $key) {
    $uri = "https://dictionaryapi.com/api/v3/references/" . urlencode($ref) . "/json/" . urlencode($word) . "?key=" . urlencode($key);

    return file_get_contents($uri);
  };

  $jdef = grab_json_definition("test", "spanish", "226a8d2c-2502-4efd-ac72-5a26eb317695");

?>
*/
</script>
