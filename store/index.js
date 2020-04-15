export const state = () => ({
  user_id: 'default'
})

export const mutations = {
  SET_USERID: (state, user) => {
    state.user_id = user
  }
}
export const getters = {
  GET_USER: (state) => {
    return state.user_id
  }
}
