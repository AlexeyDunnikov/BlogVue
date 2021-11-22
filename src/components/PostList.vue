<template>
  <div v-show="posts.length > 0">
    <h3>Список постов</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)"></post-item>
  </div>
  <h2 v-show="posts.length === 0" class="posts__error-title">
    Список постов
  </h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  .posts__error-title{
    color: red;
  }
</style>
