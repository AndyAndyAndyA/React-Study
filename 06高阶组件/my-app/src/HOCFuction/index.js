function propUsername(call) {
  function getUsername() {
    const username = 'admin'
    call(username) // 调用传入的函数
  }
  return getUsername
}
function login(username) {
  console.log('登录成功', username)
}
function logout(username) {
  console.log('退出登录', username)
}

const newLogin = propUsername(login)
const newLogout = propUsername(logout)

newLogin()
newLogout()

// propUsername 就是一个高阶函数
// 它帮我们处理了username,获取username之后传给了目标函数
// 我们就不需要去关心newLogin和newLogout的参数了
// 像map,reduce,filter,bind,debounce,throttle,promise等都是高阶函数