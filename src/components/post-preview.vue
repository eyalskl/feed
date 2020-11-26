<template>
  <div class="post-preview">
      {{ post }}
  </div>
</template>

<script>
export default {
    name: 'post-preview',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
