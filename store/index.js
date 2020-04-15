export const state = () => ({
  user_id: 'default',
  display_name: 'displayname',
  tokenid: 'token'
})

export const mutations = {
  SET_USERID: (state, user) => {
    state.user_id = user
  },
  SET_DISPLAY: (state, displayname) => {
    state.display_name = displayname
  },
  SET_TOKEN: (state, tokenid) => {
    state.tokenid = tokenid
  }
}
export const getters = {
  GET_USER: (state) => {
    return state.user_id
  },
  GET_DISPLAY: (state) => {
    return state.display_name
  },
  GET_TOKEN: (state) => {
    return state.tokenid
  }
}
