<template>

  <h1>Hello Widget</h1>
</template>

<script>
import axios from 'axios';


  export default {

    name : 'hello-world',

    beforeMount() {

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