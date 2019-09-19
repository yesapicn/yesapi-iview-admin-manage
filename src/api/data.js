import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'api/Data.GetTableData',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'api/Data.GetDragList',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'api/Data.ErrorUrl',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return null
  return axios.request({
    url: '?s=App.Logger.Record',
    data: { type: 'WARNING', message: info },
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'api/Image.Upload',
    data: formData
  })
}
