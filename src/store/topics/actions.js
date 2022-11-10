export const createTopic = async function ({ commit }, { topic }) {
  try {
    const token = this.getters['accounts/token']
    const { topics } = this.$topics.createTopic({ topic, token })
    return topics
  } catch (e) {
    
  }
}

export const updateTopic = async function ({ commit }, { topic, id }) {
  try {
    const token = this.getters['accounts/token']
    const { topics } = this.$topics.updateTopic({ id, token, topic })
    return topics
  } catch (e) {
    
  }
}

export const deleteTopic = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { topics } = this.$topics.deleteTopic({ id, token })
    return topics
  } catch (e) {
    
  }
}

export const getTopicsByUser = async function ({ commit }, { userId }) {
  try {
    const token = this.getters['accounts/token']
    const { topics } = this.$topics.getTopicsByUser({ userId, token })
    return topics
  } catch (e) {
    
  }
}

export const getTopicsBySubject = async function ({ commit }, { subject }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const token = this.getters['accounts/token']
    const { topics } = await this.$topics.getTopicsBySubject({ subject, token })
    return topics
  } catch (e) {
    
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}
