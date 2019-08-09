const HOST = 'https://cnodejs.org/api/v1/'
const Token = ' dc473eea-5314-406c-8189-65462ee10c9f'

function request(method, url, options = {}) {
  const { body, fetchConfig, timeout } = options
  const requestUrl = `${HOST}${url}`
  const requestBody = Object.assign({
    method,
    headers: {
      token: Token
    },
    body: body && JSON.stringify(body)
  })
  let promise = fetch(requestUrl, requestBody, fetchConfig).then(response => {
    const { status } = response
    if (status >= 200 && status < 300) {
      return response.json().then(result => {
        return result
      })
    }
    throw Object.assign(new Error(response.statusText), {
      response,
      status
    })
  })
  if (timeout) {
    promise = Promise.race([
      promise,
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('timeout'))
        }, timeout)
      })
    ])
  }
  return promise.catch(e => {
    console.log('fetch error =>', e)
    alert('网络不太好，请稍后重试！')
  })
}

function post(url, options = {}) {
  return request('post', url, options)
}

function get(url, options = {}) {
  return request('get', url, options)
}

export { get, post }

export default request
