export const createSubject = async function ({ commit }, { subject }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.createSubject({ subject, token })
    return subjects[0]
  } catch (e) {
    
  }
}

export const getSubjectById = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.getSubjectById({ id, token })
    return subjects[0]
  } catch (e) {
    
  }
}

export const updateSubject = async function ({ commit }, { id, subject }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.updateSubject({ id, token, subject })
    return subjects[0]
  } catch (e) {
    
  }
}

export const deleteSubject = async function ({ commit }, { id }) {
  try {
    const token = this.getters['accounts/token']
    const { subjects } = await this.$subjects.deleteSubject({ id, token })
    return subjects 
  } catch (e) {
    
  }
}

export const getSubjectsByUser = async function ({ commit }, { userId = undefined }) {
  try {
    const token = this.getters['accounts/token']
    const id = userId ? userId : this.getters['accounts/userId']
    const { subjects } = await this.$subjects.getSubjectsByUser({ userId: id, token })
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
