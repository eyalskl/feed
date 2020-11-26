<template>
    <div class="comments-container">
        <div class="input-container">
            <input type="text" @keydown.enter="addComment" placeholder="What's on your mind..." v-model="comment.content">
            <button @click="addComment"> <i class="fas fa-paper-plane"></i> </button>
        </div>
        <div class="comment-list">
            <p v-for="( comment, idx ) in post.comments" :key="idx">
              <span> {{ comment.name }} </span> - {{ comment.content }}     
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment-list',
    props: ['post'],
    data() {
        return {
            comment: {
                name: 'John Doe',
                content: ''
            }
        }
    },
    methods: {
        addComment() {
            if (!this.comment.content) return;
            this.$emit('comment-added', this.comment);
            this.comment = {
                name: 'John Doe',
                content: ''
            }
        }
    },
}
</script>

<style>

</style>