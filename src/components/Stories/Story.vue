<template>
  <div class="story">
    <div
      class="story-profile-pic"
      :class="seen ? 'seen' : ''"
    >
      <img
        :src="pic"
        alt=""
      >
    </div>
    <span>{{ username.length > 10 ? `${username.substring(0, 10)}...` : username }}</span>
  </div>
</template>

<script>
export default {
  name: 'Story',

  props: {
    pic: {
      type: String,
      default: ''
    },

    seen: {
      type: Boolean,
      default: false
    },

    username: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.story {
  padding: 5px;
  text-align: center;

  .story-profile-pic {
    align-items: center;
    background: #FFF;
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 56px;
    justify-content: center;
    margin-bottom: .3rem;
    padding: 1px;
    position: relative;
    width: 56px;

    &::after {
      background: linear-gradient(red, blue);
      border-radius: 50%;
      bottom: -2px;
      content: '';
      left: -2px;
      position: absolute;
      right: -2px;
      top: -2px;
      z-index: -1;
    }

    &.seen {
      &::after {
        background: #b3b3b3;
      }
    }

    img {
      border-radius: 50%;
      height: 98%;
      min-height: 98%;
      min-width: 98%;
    }

  }

  span {
    color: #000;
    font-size: 12px;
  }
} 
</style>
