export const saveHouses = (state, payload) => {
  state.houses = payload
}

export const saveHouseById = (state, payload) => {
  state.house = payload
}

export const saveUser = (state, payload) => {
  state.user = payload
}

export const saveAddHouses = (state, payload) => {
  state.houses.push(payload.data)
}

export const saveEditedHouse = (state, payload) => {
  state.house = payload.data
}
//
// export const saveAddAnswers = (state, payload) => {
//   console.log('sebelum di push', state.answers);
//   console.log('ini apa', payload.dataanswer);
//   state.answers.push(payload.dataanswer)
//   console.log('cek',state.answers)
// }
// export const saveDelete = (state, payload) => {
//   let index = state.answers.findIndex( a => a._id === payload.result._id)
//   if (index !== -1) {
//     state.answers.splice(index, 1)
//   }
// }
