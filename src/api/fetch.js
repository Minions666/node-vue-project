import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'

const service = axios.create()

service.interceptors.request.use(
  request => {
    if (request.method === 'get') {
      request.headers['Cache-Control'] = 'no-cache'
      request.headers['Pragma'] = 'no-cache'
    }
    let token = sessionStorage.getItem('token')
    if (token) {
      request.headers.token = token
    }
    request.data = qs.stringify(request.data)
    return request
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      Vue.bus.emit('error')
    } else {
      return response.data
    }
  }
)

export default service
