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
              <input type="text" class="form-control" v-model="add.nama" placeholder="name..">
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
              <input type="text" class="form-control" v-model="add.harga" placeholder="price..">
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea class="form-control" id="exampleTextarea" v-model="add.detail" placeholder="description.."rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Add Image</label>
              <input type="file" class="form-control-file" id="InputFile" aria-describedby="fileHelp" @change="onFileChange">
              <small id="fileHelp" class="form-text text-muted"></small>
            </div>
            <button type="button" class="btn btn-primary" @click="addHouses">Submit</button>
          </fieldset>
          <br>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
export default {
  data () {
    return {
      add: {
        nama: '',
        lokasi: '',
        latitude: '',
        longitude: '',
        harga: '',
        detail: '',
        image: ''
      },
      center: {lat: -6.2569779, lng: 106.94884830000001},
      markers: [{
        position: {lat: -6.2569779, lng: 106.94884830000001}
      }]
    }
  },
  components:{
    VueGoogleAutocomplete
  },

  methods: {
    ...mapActions(['addHouse']),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.add.image = files[0]
    },
    getAddressData: function (addressData, placeResultData, id) {
      console.log('this', addressData)
      this.markers[0].position.lat = addressData.latitude
      this.markers[0].position.lng = addressData.longitude
      this.add.lokasi = addressData.route
      this.add.latitude = addressData.latitude
      this.add.longitude = addressData.longitude
    },
    addHouses () {
      let obj = {
        nama: this.add.nama,
        lokasi: this.add.lokasi,
        latitude: this.add.latitude,
        longitude: this.add.longitude,
        harga: this.add.harga,
        detail: this.add.detail,
        image: this.add.image
      }
      this.addHouse(obj)
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
