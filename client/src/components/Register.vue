<template lang="html">
  <div class="">
  <div class="container">
    <div class="">
      <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1956083/1160/772/m1/fpnw/wm0/house-selling-logo-01-.jpg?1480326728&s=e8cfcb7f3ee93b2d40e586b263480048" alt="" style="width:30%;">
    </div>
    <div class="row">
      <div class="col-md-6">
        <br>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" v-model="users.email" placeholder="Enter email">
          </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="users.password" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input type="text" class="form-control" v-model="users.username"placeholder="Username">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Fullname</label>
          <input type="text" class="form-control" v-model="users.fullname"placeholder="Fullname">
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="users.kontak"placeholder="Phone">
        </div>
        <button type="button" class="btn btn-success" @click="register(users).then(clear)">Sign Up</button>
      </form>
      <br>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      users:{
        email:'',
        password:'',
        username:'',
        fullname:'',
        kontak:''
      }
    }
  },
  created(){
    this.hideForm()
  },
  methods:{
    hideForm(){
      let token = localStorage.getItem('token')
      if (token) {
        this.show = false
      }
    },
    ...mapActions(['register']),
    clear(){
      this.users = {}
    }
  }
}
</script>

<style scoped="" lang="css">

.row > div {
  margin-left: 22%;
  margin-bottom: 22%;
  margin-right: 17%;
  border: #cdcdcd thin solid;
  border-radius: 3px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  align-items: center;
}
</style>
