<template>
  <div class="footer">
    <div class="footer-items">
      <button class="home-button">
        <span class="home" />
      </button>

      <button class="explorer-button">
        <span class="explorer" />
      </button>

      <button class="add-photo-button">
        <span class="add-photo" />
      </button>

      <button class="notifications-button">
        <span class="notifications" />
      </button>

      <button class="profile-button">
        <span class="profile" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  .footer-items {
    align-items: center;
    border-top: 1px solid rgba(var(--b6a,219,219,219),1);
    display: flex;
    flex-direction: row;
    height: 45px;
    justify-content: space-between;
    max-width: 100%;
    padding: 0 5%;

    button {
      border: none;
      background: none;

      span {
        display: block;
        width: 24px;
        height: 24px;
        background-image: url('https://www.instagram.com/static/bundles/metro/sprite_glyphs_2x_f7d2be2d62e9.png/f7d2be2d62e9.png');

        &.home {
          background-size: 411px 393px;
          background-position: -300px -294px;
        }

        &.explorer {
          background-size: 411px 393px;
          background-position: -75px -344px;
        }

        &.add-photo {
          background-size: 411px 393px;
          background-position: -200px -319px;
        }

        &.notifications {
          background-size: 411px 393px;
          background-position: -275px -294px;
        }

        &.profile {
          background-size: 411px 393px;
          background-position: -275px -344px;
        }
      }
    }
  }
}
</style>
