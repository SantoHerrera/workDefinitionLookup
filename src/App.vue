<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <input type="text" id="searchThis"><button v-on:click="submit">submit</button>
    <p>definition: {{definition}} </p>
  </div> 
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

//let key = '226a8d2c-2502-4efd-ac72-5a26eb317695'

export default {
  name: 'App',
  text: "",
  definition: "",
  methods: {
    submit: function() {
      let inputText = document.getElementById("searchThis")
      //console.log(inputText.value)
      this.text = inputText.value;
      inputText.value = ""
      //console.log(inputText)
      this.test(this.text, "spanish", "226a8d2c-2502-4efd-ac72-5a26eb317695")
    },
    test: function(word, ref, key) {
      let url = "https://dictionaryapi.com/api/v3/references/" +  ref +  "/json/" + word + "?key=" + key;

      console.log(url)
      console.log("something  chagned")
    }
  }
}
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