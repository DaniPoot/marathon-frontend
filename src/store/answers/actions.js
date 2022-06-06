export const createAnswer = async function ({ commit }, { answer }) {
  try {

    const token = this.getters['accounts/isAuthenticated']
    const { answer } = this.$answers.createAnswer({ answer, token })

    return answer
  } catch (e) {
    
  }
}

export const updateAnswer = async function ({ commit }, { answer }) {
  try {

  } catch (e) {
    
  }
}

export const deleteAnswer = async function ({ commit }, { answer }) {
  try {

  } catch (e) {
    
  }
}

export const getAnswersByUser = async function ({ commit }, { answer }) {
  try {

  } catch (e) {
    
  }
}
