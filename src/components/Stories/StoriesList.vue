<template>
  <div class="story-list">
    <story
      v-for="story in stories"
      :key="story"
      :username="story.username"
      :pic="story.pic"
      :seen="story.seen"
      :auth-user="story.authUser"
    />
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
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net',
          authUser: true
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net'
        },
        {
          username: 'saulo_arantes',
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net',
          seen: true
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
          pic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net',
          seen: true
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
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  overflow-x: scroll;
  padding: 10px 10px;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
