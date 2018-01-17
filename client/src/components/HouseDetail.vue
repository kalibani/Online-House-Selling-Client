<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 mt-4">
        <div class="card mb-4">
            <img class="card-img-top" :src="house.image" alt="Card image cap">
            <div class="card-body">
              <h2 class="card-title">{{house.nama}}</h2>
              <div class="card-text">
                <strong>Location</strong> : <a>{{house.lokasi}}</a>
              </div>
              <div class="card-text">
                <strong>Price</strong> : <a>Rp. {{house.harga}}</a>
              </div>
              <div class="card-text">
                <p><span v-html="house.detail"></span></p>
              </div>
            </div>
            <div class="card-footer text-muted">
              <button type="button" style="float:left" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                Contact Owner
              </button>
              <div class="" v-if="house.pemilik._id == user.userId" style="float:right">
                <button type="button" @click="toUpdate" class="btn btn-primary">
                  Update
                </button>
                <button type="button" @click="deleteHouse(house._id)" class="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Contact Owner</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h4>{{house.pemilik.fullname}}</h4>
                    <h4>{{house.pemilik.kontak}}</h4>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState([
      'house',
      'user'
    ])

  },

  watch: {
   '$route' (to, from) {
     this.getHouseById(this.$route.params.id)
     this.getProfile()
    }
  },

  created(){
    this.getHouseById(this.$route.params.id)
    this.getProfile()
  },

  methods:{
    ...mapActions([
      'getHouseById',
      'getProfile',
      'deleteHouse'
    ]),
    toUpdate(){
      this.$router.push({ name: 'edit', params: { id: this.house._id }})
    }
  }
}
</script>

<style scoped="" lang="css">
.card-text {
  clear: both;
  margin-top: .5em;
  color: rgba(0, 0, 0, .68);
  float: left;
}
</style>
