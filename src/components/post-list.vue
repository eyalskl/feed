<template>
    <div class="post-list">
        <post-preview v-for="post in posts" :post="post" :key="post._id" />
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
  components: {
      postPreview
  }
};
</script>

<style>
</style>