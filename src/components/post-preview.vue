<template>
  <div class="post-preview flex column">
      <div class="author-link flex align-center">
          <img :src="post.author.avatar" alt="User avatar">
          <p> {{ post.author.name }} </p>
      </div>
      <div class="product-item">
          <img :src="post.product.imgUrl" alt="Product img">
          <p> {{ post.product.productName }} </p>
      </div>
      <div class="actions-bar flex space-between align-center">
          <p> {{ formattedPrice }} </p>
          <div class="flex">
            <button class="flex-center" @click="showComments = !showComments"> 
                <i class="far fa-comment"> </i> 
                <span class="comments-count" v-if="post.comments.length"> {{ post.comments.length }} </span> 
            </button>
            <button class="flex-center" @click="likePost"> 
                <i class="fa-heart" :class="getLikeClasses"> </i> 
                <span v-if="post.likes"> {{ post.likes }} </span> 
            </button>
          </div>
      </div>
      <comment-list :post="post" v-if="showComments" @comment-added="addComment" />
  </div>
</template>

<script>
import commentList from './comment-list';

export default {
    name: 'post-preview',
    data() {
        return {
            isLiked: false,
            showComments: false,
            comment: {
                name: 'John Doe',
                content: ''
            }
        }
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    computed: {
        formattedPrice() {
            return '€' + this.post.product.price.toFixed(2);
        },
        getLikeClasses() {
            if (!this.post.likes) return 'far';
            else if (!this.isLiked) return 'fas';
            return 'fas red';
        }
    },
    methods: {
        likePost() {
            if (this.isLiked) return;
            this.isLiked = true;
            this.post.likes++;
            this.emitUpdated();
        },
        addComment(comment) {
            this.post.comments.unshift(comment);
            this.emitUpdated();
        },
        emitUpdated(){
            this.$emit('post-updated');
        }
    },
    components: {
        commentList
    }
}
</script>
