<template>
    <div class="post-list flex column align-center">
        <post-preview v-for="post in posts" :post="post" :key="post._id" @post-updated="savePosts" />
    </div>
</template>

<script>
import postPreview from './post-preview';

export default {
  name: 'post-list',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    savePosts() {
      this.$emit('save-posts');
    }
  },
  components: {
      postPreview
  }
};
</script>

<style>
</style>