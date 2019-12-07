<template>
  <div class="story-list">
    <div
      v-for="story in stories"
      :key="story"
    >
      <story
        :username="story.username"
        :pic="story.pic"
      />
    </div>
  </div>
</template>

<script>
import Story from './Story'

export default {
  name: 'StoriesList',

  components: {
    Story
  },

  data() {
    return {
      stories: [
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.story-list {
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  padding: 10px 10px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
