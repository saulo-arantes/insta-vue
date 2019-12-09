<template>
  <div class="post">
    <div class="head">
      <div class="user">
        <story
          :pic="post.userpic"
          :username="post.user"
          :limit-string="false"
          class="d-flex"
        />
      </div>
      <button class="options-button">
        <span class="options" />
      </button>
    </div>

    <div class="images">
      <img
        :src="post.photo.img"
        :alt="post.photo.desc"
      >
    </div>

    <actions />

    <div class="likes"></div>

    <div class="description"></div>

    <div class="comments"></div>

    <div class="date"></div>
  </div>
</template>

<script>
import Story from './../Stories/Story'
import Actions from './PostActions'

export default {
  name: 'Post',

  components: {
    Actions,
    Story
  },

  props: {
    post: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 100%;

  .head {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 5px;

    .options-button {
      align-content: center;
      background: none;
      border: none;
      cursor: pointer;
      
      .options {
        width: 24px;
        height: 24px;
        display: block;
        background-image: url('https://www.instagram.com/static/bundles/metro/sprite_glyphs_2x_f7d2be2d62e9.png/f7d2be2d62e9.png');
        background-size: 411px 393px;
        background-position: -175px -319px;
      }
    }
  }
  
  .images {
    height: auto;
    max-height: 100%;
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
