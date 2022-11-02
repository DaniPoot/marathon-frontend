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
    const token =   localStorage['auth-token'] // this.getters['accounts/token']
    console.log(token)
    const { subjects } = this.$subjects.getSubjectsByUser({ userId, token })
    return subjects 
  } catch (e) {
    
  }
}
