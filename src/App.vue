<template>
  <div id="vue-root">
    <section class="app">
      <nav>
        <header>
          <instagram-header />
        </header>
        <footer>
          <instagram-footer />
        </footer>
      </nav>
      <main>
        <section class="feed">
          <stories-list />
        </section>
      </main>
    </section>
  </div>
</template>

<script>
import InstagramHeader from './components/Header'
import InstagramFooter from './components/Footer'
import StoriesList from './components/Stories/StoriesList'

export default {
  name: 'App',
  components: {
    InstagramHeader,
    InstagramFooter,
    StoriesList
  }
}
</script>

<style lang="scss" scoped>
#vue-root {  
  .app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    nav {
      header, footer {
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        left: 0;
        position: fixed;
        right: 0;
        width: 100%;
        z-index: 1;
      }

      header {
        order: 0;
        top: 0;
      }

      footer {
        bottom: 0;
        order: 5;
      }
    }

    main {
      flex-grow: 1;
      margin-top: 40px;
      order: 4;

      .feed {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
