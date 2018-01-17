<template lang="html">
  <div class="container">
    <div class="row">
      <gmap-map
      :center="center"
      :zoom="7"
      style="width: 500px; height: 300px"
      >
      <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    	<div class="col-md-6 mt-4">
        <form>
          <br>
          <fieldset>
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="house.nama" placeholder="name..">
            </div>
            <div class="form-group">
              <label>Location</label>
              <vue-google-autocomplete
                id="map"
                classname="form-control"
                placeholder="Start typing"
                v-on:placechanged="getAddressData"
              >
              </vue-google-autocomplete>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Price</label>
              <input type="text" class="form-control" v-model="house.harga" placeholder="price..">
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea class="form-control" id="exampleTextarea" v-model="house.detail" placeholder="description.."rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Edit Image</label>
              <input type="file" class="form-control-file" id="InputFile" aria-describedby="fileHelp" @change="onFileChange">
              <small id="fileHelp" class="form-text text-muted"></small>
            </div>
            <button type="button" class="btn btn-primary" @click="updateHouses(house._id)">Submit</button>
          </fieldset>
          <br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  data () {
    return {
      center: {lat: -6.2569779, lng: 106.94884830000001},
      markers: [{
        position: {lat: -6.2569779, lng: 106.94884830000001}
      }]
    }
  },
  components:{
    VueGoogleAutocomplete
  },
  watch: {
    '$route' (to, from) {
      this.getHouseById(this.$route.params.id)
    }
  },
  computed:{
    ...mapState(['house'])
  },
  methods: {
    ...mapActions([
      'updateHouse',
      'getHouseById'
    ]),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.house.image = files[0]
    },
    getAddressData: function (addressData, placeResultData, id) {
      console.log('this', addressData)
      this.markers[0].position.lat = addressData.latitude
      this.markers[0].position.lng = addressData.longitude
      this.house.lokasi = addressData.route
      this.house.latitude = addressData.latitude
      this.house.longitude = addressData.longitude
    },
    updateHouses (id) {
      let obj = {
        id: id,
        nama: this.house.nama,
        lokasi: this.house.lokasi,
        latitude: this.house.latitude,
        longitude: this.house.longitude,
        harga: this.house.harga,
        detail: this.house.detail,
        image: this.house.image
      }
      this.updateHouse(obj)
    }
  }
}
</script>

<style scoped="" lang="css">

.row > div {
  text-align: left;
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 17%;
  border: #cdcdcd thin solid;
  border-radius: 3px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}
</style>
