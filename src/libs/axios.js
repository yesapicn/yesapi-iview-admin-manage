import axios from 'axios'
import store from '@/store'
import md5 from 'js-md5'

// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl = baseURL, app_key = app_key, app_secrect = app_secrect) {
    this.baseUrl = baseUrl
    this.app_key = app_key
    this.app_secrect = app_secrect
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      // 1、对于真实接口请求，只取data部分（但在浏览器控制台可以看到接口返回的全部内容，方便后端开发调试）
      // 2、对于开发时的模拟数据，直接返回全部
      return (data && data.data) ? { data: data.data, status } : { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)

    // console.log(options)

    // 自成签名，公共参数
    var data = options.data ? options.data : {}
    data.app_key = this.app_key
    data.sign = ''
    data.sign = this.enryptData(data)
    return instance(options)
  }

  /**
   * 生成小白接口签名
   */
  enryptData (params) {
    var sdic = Object.keys(params).sort()
    var paramsStrExceptSign = ''
    for (let ki in sdic) {
      paramsStrExceptSign += params[sdic[ki]]
    }

    var sign = md5(paramsStrExceptSign + this.app_secrect).toUpperCase()
    return sign
  }
}
export default HttpRequest
