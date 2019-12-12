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

    <div class="likes">
      <img
        src="https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net"
        alt=""
      >
      <span>Liked by <strong>saulo_arantes</strong> and <strong>42</strong> others</span>
    </div>

    <div class="description">
      <strong>saulo_arantes</strong> Desenvolvendo a página inicial do Instagram em Vue JS
    </div>

    <div class="date">
      3 minutes ago
    </div>
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
  margin-bottom: 20px;
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

  .likes {
    align-items: center;
    padding: .3rem 18px;
    display: flex;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 5px;
    }
    span {
      font-size: 14px;
    }
  }

  .description {
    padding: .3rem 18px;
  }

  .date {
    padding: .3rem 18px;
    letter-spacing: .2px;
    color: #999999;
    font-size: 10px;
    text-transform: uppercase;
  }
}
</style>
