<template>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Username</label>
        <input type="text" id="name" v-model="username" />
      </div>
      <div class="form-group">
        <label for="age">Password</label>
        <input type="text" id="age" v-model="password" />
      </div>
      <div class="form-group">
        <label for="age">Email</label>
        <input type="text" id="age" v-model="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
</template>
<script>
import axios from "axios"

export default{
    name: 'register-page',
    components:{
        
    },
    data(){
        return{
            error: '',
            username:'',
            email: '',
            password: ''
    }

    },
    methods:{
        register(){
            axios
        .post('http://localhost:3000/api/user/create', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.username = ''
          this.email = ''
          this.password = ''
        })
        .catch(error => (this.error = error));
    },
        }
    }

</script>