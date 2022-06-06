import axios from '../config/axios'

export const createQuestion = ({ question, token }) => {
  axios.post('/questions', question, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateQuestion = ({ id, token, question }) => {
  axios.put(`/questions/${id}`, question, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteQuestion = ({ id, token }) => {
  axios.delete(`/questions/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getQuestionsByUser = ({ userId, token }) => {
  axios.get('/questions', { created_by: userId }, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
