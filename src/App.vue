<template>
  <div id="app">
    <h1>English/Spanish dictionary</h1>
    <h3>search word to get definition in other language</h3>

    <input type="text" id="searchThis" />
    <button v-on:click="clearSearchBar">submit</button>

    <p>Word Searched: {{wordSearched}}</p>
    <ol>
      <li v-for="(item, index ) in inventory" :item="item" v-bind:key="index">{{ item.definition }}</li>
    </ol>
  </div>
</template>

<script>
//what toDo
//displays returned data from api
export default {
  name: "App",
  definition: "fuck",
  wordSearched: " ",
  jsonKey: "226a8d2c-2502-4efd-ac72-5a26eb317695",
  data: function() {
    return {
      inventory: [{ definition: "" }]
    };
  },
  methods: {
    clearSearchBar: function() {
      let inputText = document.getElementById("searchThis");

      const word = inputText.value;
      this.wordSearched = word;

      inputText.value = "";
      this.inventory = [];

      this.getWordDefinitionV2(word);
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
    getWordDefinitionV2: function(word) {
      let requestURL = this.newURL(
        word,
        "spanish",
        "226a8d2c-2502-4efd-ac72-5a26eb317695"
      );

      fetch(requestURL)
        .then(response => response.json())
        .then(data => {
          data.forEach(obj => {
            //sets data
            obj.shortdef.forEach(def => {
              this.inventory.push({ definition: def });
            });
          });
        });
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
