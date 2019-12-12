<template>
  <div class="feed">
    <post
      v-for="(post, key) in posts"
      :key="key"
      :post="post"
    />
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'Feed',

  components: {
    Post
  },

  data() {
    return {
      posts: [
        {
          photo: {
            img: 'https://instagram.fdiq3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/75259560_1630482673783160_6932786690020760194_n.jpg?_nc_ht=instagram.fdiq3-1.fna.fbcdn.net&_nc_cat=108&oh=10632e60a094c58013c06db1c82636e9&oe=5E809B7A',
            desc: 'Miranha'
          },
          user: 'saulo_arantes',
          userpic: 'https://instagram.fplu8-1.fna.fbcdn.net/vp/a1887e34947af89e32056e50d74c47fd/5E70F22B/t51.2885-19/s150x150/43913482_751756551832600_1722241345499693056_n.jpg?_nc_ht=instagram.fplu8-1.fna.fbcdn.net',
          likedBy: [],
          comments: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.feed {

}
</style>
