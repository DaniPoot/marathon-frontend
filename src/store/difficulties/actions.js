export const createDifficulty = async function ({ commit }, { difficulty }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { difficulties } = await this.$difficulties.createDifficulty({ token, difficulty })
    return difficulties 
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getDifficultyById = async function ({ commit }, { id }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { difficulties } = await this.$difficulties.getDifficultyById({ id, token })
    return difficulties[0]
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const updateDifficulty = async function ({ commit }, { difficulty, id }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { difficulties } = this.$difficulties.updateDifficulty({ id, token, difficulty })
    return difficulties
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const deleteDifficulty = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = await this.$difficulties.deleteDifficulty({ id, token })
    return difficulties[0]
  } catch (e) {
    
  }
}

export const getAllDifficulties = async function ({ commit }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = await this.$difficulties.getDifficulties({ token })
    console.log({ difficulties, 'message': 'all' })
    return difficulties
  } catch (e) {
    
  }
}
