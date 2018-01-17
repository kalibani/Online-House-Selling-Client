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
