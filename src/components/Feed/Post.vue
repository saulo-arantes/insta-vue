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
      <button class="options">
        ...
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
    padding-right: 15px;

    .options {
      align-content: center;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
      font-weight: 700;
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
