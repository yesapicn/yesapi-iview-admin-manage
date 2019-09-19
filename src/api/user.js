import axios from '@/libs/api.request'
import md5 from 'js-md5'

export const login = ({ userName, password }) => {
  const data = {
    s: 'App.User.Login',
    username: userName,
    password: md5(password)
  }
  return axios.request({
    url: '/',
    data,
    method: 'post'
  })
}

export const getUserInfo = (uuid, token) => {
  const data = {
    s: 'App.User.Profile',
    uuid,
    token
  }
  return axios.request({
    url: '/',
    data,
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'api/User.Logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'api/Message.Count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'api/Message.InitMsg',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'api/Message.Content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'api/Message.HasRead',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'api/Message.RemoveReaded',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'api/Message.Restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
