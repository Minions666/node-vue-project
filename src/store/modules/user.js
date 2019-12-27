
const $user = {
  state: {
    // 用户名
    name: '',
    // 身份凭证
    token: ''
  },
  mutations: {
    // 设置用户名
    SET_NAME: (state, data) => {
      state.name = data
      sessionStorage.setItem('userName', data)
    },
    // 设置身份凭证
    SET_TOKEN: (state, data) => {
      state.token = data
      sessionStorage.setItem('token', data)
    }
  },
  actions: {

  }
}

export default $user
