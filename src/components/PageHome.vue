<template>
  <h1>Welcome to the Forum</h1>
  <thread-list :threads="threads"/>
</template>

<script>
import sourceData from '../data.json'
import ThreadList from "./ThreadList";

export default {
  components: {
    ThreadList
  },
  data() {
    return {
      threads: sourceData.threads,
    }
  },
}
</script>
