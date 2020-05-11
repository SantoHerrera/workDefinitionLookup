<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <input type="text" id="searchThis" />
    <button v-on:click="submit">submit</button>s

    <p>{{definition}}</p>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//let key = '226a8d2c-2502-4efd-ac72-5a26eb317695'

export default {
  name: "App",
  text: "",
  definition: "fuck",
  jsonKey: "226a8d2c-2502-4efd-ac72-5a26eb317695",
  methods: {
    submit: function() {
      let inputText = document.getElementById("searchThis");
      //console.log(inputText.value)
      this.text = inputText.value;
      inputText.value = "";
      //console.log(inputText)
      this.fuckIfIKnow();
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
    fuckIfIKnow: function() {
      let requestURL = this.newURL(
        "porque",
        "spanish",
        "226a8d2c-2502-4efd-ac72-5a26eb317695"
      );

      let request = new XMLHttpRequest();
      request.open("GET", requestURL);

      request.responseType = "json";
      request.send();

      request.onload = function() {
        const superHeroes = request.response;
        
        //console.log(superHeroes[0].shortdef)

        let def = superHeroes[0].shortdef;

        let newDef = "";

        for(let i = 0; i < def.length; i++) {
          newDef +=  `${def[i]} ,`
        }

        console.log(newDef)

        this.definition = newDef;
      };
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
//key spanish
//226a8d2c-2502-4efd-ac72-5a26eb317695


console.log((function() {
	let one = 1
  let zero = 0;
  return one > 0;
})());
