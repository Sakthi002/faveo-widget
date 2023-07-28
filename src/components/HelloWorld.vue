<template>

  <h1>Hello Widget</h1>
</template>

<script>
import axios from 'axios';


  export default {

    name : 'hello-world',

    data () {

      return {

        baseUrl : ''
      }
    },

    beforeMount() {

      // Get the value of the 'params' parameter from the iframe URL
      var urlParams = new URLSearchParams(window.location.search);
      var paramsValue = urlParams.get('params');
      console.log(paramsValue,'retrived'); // This will log 'test' in the iframe's console

      this.baseUrl = paramsValue;

      this.getArticles()
    },

    methods : {

      getArticles() {

        axios.get(this.baseUrl+'/api/article-list-with-category').then(res=>{
          console.log(res.data,'dddtest')
        }).catch(err=>{
          console.error(err)
        })
      }
    }
  }
</script>