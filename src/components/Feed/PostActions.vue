<template>
  <div class="actions">
    <div class="interactions">
      <button class="like-button">
        <span class="unlike" />
      </button>

      <button class="comment-button">
        <span class="comment" />
      </button>

      <button class="direct-button">
        <span class="direct" />
      </button>
    </div>
    <button class="save-button">
      <span class="save" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PostActions'
}
</script>

<style lang="scss" scoped>
.actions {
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  .interactions {
    padding: .3rem .8rem;
    display: flex;
    align-items: center;

    button {
      border: none;
      background: none;
      span {
        background-image: url('https://www.instagram.com/static/bundles/metro/sprite_glyphs_2x_f7d2be2d62e9.png/f7d2be2d62e9.png');
        width: 24px;
        height: 24px;
        display: block;
        position: relative;

        &.like {
          background-position: -275px -294px;
          background-size: 411px 393px;
        }

        &.unlike {
          background-size: 411px 393px;
          background-position: -250px -294px;
        }

        &.comment {
          background-size: 411px 393px;
          background-position: -301px -254px;
        }

        &.direct {
          background-size: 411px 393px;
          background-position: -50px -294px;
        }
      }
    }
  }

  .save-button {
    border: none;
    background: none;
    padding: .3rem .8rem;
    .save {
        background-image: url('https://www.instagram.com/static/bundles/metro/sprite_glyphs_2x_f7d2be2d62e9.png/f7d2be2d62e9.png');
        width: 24px;
        height: 24px;
        display: block;
        background-size: 411px 393px;
        background-position: -25px -344px;
    }
  }
}
</style>
