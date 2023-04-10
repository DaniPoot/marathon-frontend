import axios from '../config/axios'

export const createTopic = ({ topic, token }) => {
  return axios.post('/topics/create', topic, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateTopic = ({ id, token, topic }) => {
  return axios.put(`/topics/${id}`, topic, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteTopic = ({ id, token }) => {
  return axios.delete(`/topics/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getTopicById = ({ id, token }) => {
  return axios.get(`/topics/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getTopicsByUser = ({ userId, token }) => {
  return axios.get(`/topics/user/${userId}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getTopicsBySubject = ({ subject, token }) => {
  return axios.get(`/topics/subject/${subject}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
