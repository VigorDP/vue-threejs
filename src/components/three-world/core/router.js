export default class Router {
  constructor(
    route = {
      current: 'one',
      parent: null
    }
  ) {
    this.stack = [route]
  }
  getLastChild() {
    return this.stack[this.stack.length - 1]
  }
  push(route) {
    const isRepeated = this.stack.some(item => item.current === route.current)
    if (!isRepeated) {
      this.stack.push(route)
    }
  }
  pop() {
    if (this.stack.length <= 1) {
      return
    }
    return this.stack.pop()
  }
}
