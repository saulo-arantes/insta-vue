<template>
  <div id="app">
    <instagram-header />
    <stories-list />
  </div>
</template>

<script>
import InstagramHeader from './components/Header'
import StoriesList from './components/Stories/StoriesList'

export default {
  name: 'App',
  components: {
    InstagramHeader,
    StoriesList
  }
}
</script>
