import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://houseselling-api.kautzaralibani.com/api',
  headers: {
    Authorization: token
  }
})

export const getAllHouses = ({ commit }) => {
  http.get('/house')
  .then(({data}) => {
    commit('saveHouses', data)
  }).catch((err) => {
    console.log(err)
  })
}


export const getHouseById = ({ commit }, id) => {
  http.get('/house/' + id)
  .then(({data}) => {
    commit('saveHouseById', data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const login = ({ commit }, payload) => {
  http.post('/users/auth/login', payload)
  .then(({data}) => {
    localStorage.setItem('token', data.token)
    if (data.token) {
      swal({
        title: 'OK',
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        location.reload()
        router.push('/Gallery')
      })
    } else {
      swal({
        title: 'error',
        text: data.message,
        icon: 'error',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const getProfile = ({ commit }) => {
  let token = localStorage.getItem('token')
  if (token) {
    http.post('/users/myprofile')
    .then(({data}) => {
      commit('saveUser', data)
    })
    .catch((err) => {
      console.log(err)
    })
  } else {
    console.log('belum login');
  }
}

export const register = ({ commit }, payload) => {
  http.post('/users/auth/register', payload)
  .then(({data}) => {
    if (data.message == 'Register Success!') {
      swal({
        title: 'OK',
        text: data.message,
        icon: 'success',
        button: 'OK'
      })
    } else {
      swal({
        title: 'error',
        text: data.message,
        icon: 'error',
        button: 'OK'
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const addHouse = ({ commit }, payload) => {
  let house = new FormData()
  house.append('nama', payload.nama)
  house.append('lokasi', payload.lokasi)
  house.append('latitude', payload.latitude)
  house.append('longitude', payload.longitude)
  house.append('harga', payload.harga)
  house.append('detail', payload.detail)
  house.append('image', payload.image)
  http.post('/house/create', house)
  .then(({data}) => {
    if (data.message === 'House Succesfully Added!') {
      commit('saveAddHouses', data)
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        router.push('/gallery')
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

export const updateHouse = ({ commit }, payload) => {
  let house = new FormData()
  house.append('nama', payload.nama)
  house.append('lokasi', payload.lokasi)
  house.append('latitude', payload.latitude)
  house.append('longitude', payload.longitude)
  house.append('harga', payload.harga)
  house.append('detail', payload.detail)
  house.append('image', payload.image)
  http.put('/house/update/' +payload.id, house)
  .then(({data}) => {
    if (data.message === 'Update Succes!') {
      commit('saveEditedHouse', data)
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        router.push('/gallery')
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}



export const deleteHouse = ({ commit }, id) => {
  console.log('ini', id);
  http.delete('/house/'+ id)
  .then(({data}) => {
    if (data.message === "House successfully deleted!") {
      swal({
        text: data.message,
        icon: 'success',
        button: 'OK'
      }).then(() => {
        router.push('/gallery')
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
}
