export const createAnswer = async function ({ commit }, { answer }) {
  try {
    const token = this.getters['accounts/token']
    const { answer } = this.$answers.createAnswer({ answer, token })
    return answer
  } catch (e) {
    
  }
}

export const updateAnswer = async function ({ commit }, { answer, id }) {
  try {
    const token = this.getters['accounts/token']
    const { answer } = this.$answers.updateAnswer({ answer, token, id })
    return answer
  } catch (e) {
    
  }
}

export const deleteAnswer = async function ({ commit }, { answer }) {
  try {
    const token = this.getters['accounts/token']
    const { answer } = this.$answers.deleteAnswer({ token, id })
    return answer
  } catch (e) {
    
  }
}

export const getAnswersByUser = async function ({ commit }, { userId }) {
  try {
    const token = this.getters['accounts/token']
    const { answers } = this.$answers.getAnswersByUser({ userId })
    return answers
  } catch (e) {
    
  }
}
