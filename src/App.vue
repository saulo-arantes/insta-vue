<template>
  <div id="vue-root">
    <section class="app">
      <nav>
        <header>
          <instagram-header />
        </header>
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
import StoriesList from './components/Stories/StoriesList'

export default {
  name: 'App',
  components: {
    InstagramHeader,
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
      header {
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        left: 0;
        position: fixed;
        order: 0;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1;
        &::before {
          background-color: rgba(var(--b6a,219,219,219),1);
          bottom: -1;
          content: '';
          left: 0;
          position: absolute;
          right: 0;
        }
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
