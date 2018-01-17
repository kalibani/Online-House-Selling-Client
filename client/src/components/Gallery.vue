<template lang="html">
  <div class="">
    <div class="container">
      <form>
        <div class="form-group">
          <label style="float:left;">Search</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search...">
        </div>
      </form>
      <div class="row">
        <div class="col-md-4 mt-4" v-for="h in houses">
          <div class="card card-inverse card-info">
            <img class="card-img-top" :src="h.image">
            <div class="card-block">
              <figure class="profile">
                <img src="https://cdn.oncarrot.com/uploads/sites/15507/2017/03/Selling-Logo-copy.png" class="profile-avatar" alt="">
              </figure>
                <h4 class="card-title mt-6"><a>{{h.nama}}</a></h4>
                <div class="meta card-text">
                  <strong>Location</strong> : <a>{{h.lokasi}}</a>
                </div>
                <div class="meta card-text">
                  <strong>Price</strong> : <a>Rp. {{h.harga}}</a>
                </div>
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'HouseDetail', params: { id:h._id } }">
                <button class="btn btn-info float-right btn-sm">Details</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['houses'])
  },
  created(){
    this.getAllHouses()
  },
  methods:{
    ...mapActions(['getAllHouses'])
  }

}
</script>

<style scoped="" lang="css">
@import "../assets/gallery.css";
</style>
