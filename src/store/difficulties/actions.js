export const createDifficulty = async function ({ commit }, { difficulty }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = this.$difficulties.createDifficulty({ token, difficulty })
    return difficulties 
  } catch (e) {
    
  }
}

export const updateDifficulty = async function ({ commit }, { difficulty, id }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = this.$difficulties.updateDifficulty({ id, token, difficulty })
    return difficulties
  } catch (e) {
    
  }
}

export const deleteDifficulty = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = this.$difficulties.deleteDifficulty({ id, token })
    return difficulties
  } catch (e) {
    
  }
}

export const getAnswersByUser = async function ({ commit }, { userId }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = this.$difficulties.getDifficultiesByUser({ userId, token })
    return difficulties
  } catch (e) {
    
  }
} 

export const getAnswers = async function ({ commit }) {
  try {
    const token = this.getters['accounts/token']
    const { difficulties } = this.$difficulties.getDifficulties({ token })
    return difficulties
  } catch (e) {
    
  }
}
