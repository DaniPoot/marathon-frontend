export const createAnswer = async function ({ commit }, { answer }) {
  try {
    const token = this.getters['accounts/token']
    const { answer: answerResponse } = await this.$answers.createAnswer({ answer, token })
    return answerResponse
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

export const verifyAnswer = async function ({ commit }, { question, answer }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { is_correct } = await this.$answers.verifyAnswer({ question, answer, token })
    return is_correct
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getAnswersByQuestion = async function ({ commit }, { questionId }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { answers } = await this.$answers.getAnswersByQuestion({ questionId, token })
    return answers
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}
