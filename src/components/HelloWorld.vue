<template>

  <h1>Hello Widget</h1>
</template>

<script>
import axios from 'axios';


  export default {

    name : 'hello-world',

    beforeMount() {

      // Get the value of the 'params' parameter from the iframe URL
      var urlParams = new URLSearchParams(window.location.search);
      var paramsValue = urlParams.get('params');
      console.log(paramsValue),'retrived value'; // This will log 'test' in the iframe's console

      this.getArticles()
    },

    methods : {

      getArticles() {

        axios.get('https://support.faveohelpdesk.com/api/article-list-with-category').then(res=>{
          console.log(res.data,'dddtest')
        }).catch(err=>{
          console.error(err)
        })
      }
    }
  }
</script>