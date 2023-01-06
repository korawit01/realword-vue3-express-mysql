<template>
  {{ dy }}-{{ dm }}-{{ dd }}
    <div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Title</label>
        <input type="text" id="name" v-model="title" />
      </div>
      <div class="form-group">
        <label for="age">Description</label>
        <input type="text" id="age" v-model="description" />
      </div>
      <div class="form-group">
        <label for="age">Owner id</label>
        <input type="text" id="age" v-model="owner_id" />
      </div>
      <button type="submit">Submit</button>
    </form>
    <div>
      <ul>
        <li v-for="article in articles" :key="article.article_id">
          {{ article.title }} - {{ article.description }} - {{ article.createdAt }} - {{  article.favoritesCount }}
          <button @click="prepareEdit(article)">Edit</button>
          <button @click="onDelete(article.article_id)">Delete</button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="onEditSubmit">
      EDIT
      <div class="form-group">
        <label for="name">Title</label>
        <input type="text" id="name" v-model="title" />
      </div>
      <div class="form-group">
        <label for="age">Description</label>
        <input type="text" id="age" v-model="description" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'homeView',
  components: {
    
  },
  data() {
            return {
            error: '',
            title: '',
            description: '',
            date: '',
            owner_id: '',
            body: '',
            tagList: '',
            articles: [],
            dd: '',
            dm: '',
            dy: ''
            };
  },
  async created() {
    this.articles = await this.getArticle();
    this.getDate()
    
  },
  methods: {
    async getArticle() {
        axios
        .get('http://localhost:3000/api/article/get')
        .then(response => (this.articles = response.data))
        .catch(error => (this.error = error));
    },
    getDate(){
      this.dd = new Date().getDate();
      this.dm = new Date().getMonth()+1;
      this.dy = new Date().getFullYear();
    },
    onSubmit() {
      axios
        .post('http://localhost:3000/api/article/create', {
          title: this.title,
          description: this.description,
          body: this.body,
          date: `${this.dy}-${this.dm}-${this.dd}`,
          tagList: this.tagList,
          owner_id: this.owner_id
        })
        .then((response) => {
          this.title = ''
          this.description = ''
          this.date = ''
          this.tagList = ''
          this.owner_id = ''
          this.articles.push(response.data);
        })
        .catch(error => (this.error = error));
    },
    prepareEdit(article){
          this.title = article.title
          this.description = article.description
          this.aid = article.article_id
    },
    onEditSubmit(){
      axios
        .put('http://localhost:3000/api/article/update',{
          title: this.title,
          description: this.description,
          body: this.body,
          aid: this.aid
        })
        .then(() => {
          this.title = ''
          this.description = ''
          this.body = ''
          this.aid = ''
          this.getArticle()
        })
    },
    onDelete(aid) {
      axios
        .delete(`http://localhost:3000/api/article/delete/?aid=${aid}`)
        .then(() => this.getUsers())
        .catch(error => (this.error = error));
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

