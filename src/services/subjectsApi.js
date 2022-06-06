import axios from '../config/axios'

export const createSubject = ({ subject, token }) => {
  return axios.post('/subjects/create', answer, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateSubject = ({ id, token, subject }) => {
  return axios.put(`/subjects/${id}`, subject, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteSubject = ({ id, token }) => {
  return axios.delete(`/subjects/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getSubjectsByUser = ({ userId, token }) => {
  return axios.get('/subjects', { created_by: userId }, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
