<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <my-button class="app__create-post-btn" @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show='dialogVisible'><post-form @create="createPost"></post-form></my-dialog>

    <post-list :posts="posts" @remove="removePost"></post-list>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from './components/UI/MyButton.vue';
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
    MyButton,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchPosts(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      }
      catch(e){
        alert('error');
      }
    }
  },
};
</script>

<style>
.app {
  padding: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app__create-post-btn{
  margin: 15px 0;
}
</style>
