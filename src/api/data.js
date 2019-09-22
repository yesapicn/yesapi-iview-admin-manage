import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'api/Data.GetTableData',
    method: 'get'
  })
}

export const getListData = () => {
  return axios.request({
    url: '/?service=App.Table.FreeQuery&model_name=yesapi_tbl_article&logic=and&where=%5B%5B"id"%2C+"%3D"%2C+"1"%5D%5D&page=1&perpage=10&app_key=16BD4337FB1D355902E0502AFCBFD4DF&sign=B544DD2117639033FA8C4A50AFCA3B49',
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
