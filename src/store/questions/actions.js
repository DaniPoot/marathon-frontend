export const createQuestion = async function ({ commit }, { question }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = this.$questions.createQuestion({ question, token })
    return questions
  } catch (e) {
    
  }
}

export const updateQuestion = async function ({ commit }, { question }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = this.$questions.updateQuestion({ id, token, question })
    return questions
  } catch (e) {
    
  }
}

export const deleteQuestion = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = this.$questions.deleteQuestion = ({ id, token })
    return questions
  } catch (e) {
    
  }
}

export const getQuestionsByUser = async function ({ commit }, { userId }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = this.$questions.getQuestionsByUser({ userId, token })
    return questions
  } catch (e) {
    
  }
}
