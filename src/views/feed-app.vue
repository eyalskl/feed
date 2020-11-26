<template>
  <section class="feed-app">
    <h1> Welcome to the FEED! </h1>
    <post-list v-if="posts" :posts="posts" />
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
      console.log(this.posts);
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
