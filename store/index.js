export const state = () => ({
  user_id: 'default',
  display_name: 'displayname'
})

export const mutations = {
  SET_USERID: (state, user) => {
    state.user_id = user
  },
  SET_DISPLAY: (state, displayname) => {
    state.display_name = displayname
  }
}
export const getters = {
  GET_USER: (state) => {
    return state.user_id
  },
  GET_DISPLAY: (state) => {
    return state.display_name
  }
}
