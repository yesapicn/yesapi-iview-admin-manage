import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev.host : config.baseUrl.pro.host
const app_key = process.env.NODE_ENV === 'development' ? config.baseUrl.dev.app_key : config.baseUrl.pro.app_key
const app_secrect = process.env.NODE_ENV === 'development' ? config.baseUrl.dev.app_secrect : config.baseUrl.pro.app_secrect

const axios = new HttpRequest(baseUrl, app_key, app_secrect)
export default axios
