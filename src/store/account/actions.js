export const login = async function ({ commit }, { email, password, remember = false }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const { token, user } = await this.$auth.login({ email, password })
    commit('setAccount', user)
    commit('setToken', token)
    localStorage.setItem('autologin', remember)
    localStorage.setItem('auth-token', token)
    localStorage.setItem('auth-account', JSON.stringify(user))
    return user
  } catch (e) {
    console.error(e)
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }

}

export const autoLogin = async function ({ commit }) {
  const remember = localStorage.getItem('autologin')
  if (!remember) return
  try {
    commit('general/setIsLoading', true, { root: true })
    const authToken = localStorage.getItem('auth-token')
    const { id: userId } = JSON.parse(localStorage.getItem('auth-account'))
    const { user, token } = await this.$auth.verifyUserToken(authToken, userId)
    commit('setAccount', user)
    commit('setToken', token)
    console.log({ user, token })
    localStorage.setItem('auth-token', token)
    localStorage.setItem('auth-account', JSON.stringify(user))
    return user
  } catch (e) {
    console.error(e) 
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export function logout () {
  commit('resetAccountInfo')
  localStorage.removeItem('autologin')
  localStorage.removeItem('auth-token')
  localStorage.removeItem('auth-account')
}
