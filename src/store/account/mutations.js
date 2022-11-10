export const setAccount = (state, account) => {
  state.account = account
}

export const setToken = (state, token) => {
  state.token = token
}

export const resetAccountInfo = (state) => {
  state.token = null
  state.account = null
}

