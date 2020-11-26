<template>
  <section class="feed-app">
    <!-- <h1> Welcome to the FEED! </h1> -->
    <post-list v-if="posts" :posts="posts" @save-posts="savePosts" />
  </section>
</template>

<script>
import { postService } from '@/services/post.service';
import postList from '@/components/post-list';

export default {
  name: 'feed-app',
  data() {
    return {
      posts: null,  
    }
  },
  methods: {
    async loadPosts() {
      this.posts = await postService.query()
    },
    savePosts() {
      postService.savePostsToStorage();
    }
  },
  created() {
    this.loadPosts();
  },
  components: {
    postList
  }
}
</script>
