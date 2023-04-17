export const getQuestionById = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = await this.$questions.getQuestionById({ id, token })
    return questions[0]
  } catch (e) {
    
  }
}

export const createQuestion = async function ({ commit }, { question }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = await this.$questions.createQuestion({ question, token })
    return questions[0]
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
    const { questions } = await this.$questions.deleteQuestion({ id, token })
    return questions[0]
  } catch (e) {
    
  }
}

export const getQuestionsByUser = async function ({ commit }, { userId }) {
  try {
    const token = this.getters['accounts/token']
    const { questions } = await this.$questions.getQuestionsByUser({ userId, token })
    return questions
  } catch (e) {
    
  }
}

export const getQuestionByTopicsAndDifficulties =  async function ({ commit }, { topics, difficulties }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { questions } = await this.$questions.getQuestionByTopicsAndDifficulties({ topics, difficulties, token })
    return questions
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const assignAnswersToQuestions = async function ({ commit }, { id, answers }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { questions } = await this.$questions.assignAnswersToQuestions({ id, answers, token })
    return questions[0]
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}
