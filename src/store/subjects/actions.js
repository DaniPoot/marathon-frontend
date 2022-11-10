export const createSubject = async function ({ commit }, { subject }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = this.$subjects.createSubject({ subject, token })
    return subjects 
  } catch (e) {
    
  }
}

export const updateSubject = async function ({ commit }, { id, subject }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = this.$subjects.updateSubject({ id, token, subject })
    return subjects 
  } catch (e) {
    
  }
}

export const deleteSubject = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = this.$subjects.deleteSubject({ id, token })
    return subjects 
  } catch (e) {
    
  }
}

export const getSubjectsByUser = async function ({ commit }, { userId }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.getSubjectsByUser({ userId, token })
    return subjects 
  } catch (e) {
    
  }
}

export const getAllSubjects = async function ({ commit }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.getAllSubjects({ token })
    return subjects 
  } catch (e) {
    
  }
}

export const getAllSubjectsByQuery = async function ({ commit }, query) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.getAllSubjectsByQuery({ query, token })
    return subjects 
  } catch (e) {
  }
}
