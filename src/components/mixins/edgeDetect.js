// 边缘检测

const edgeDetect = {
  mounted() {
    this.checkEdge()
  },
  updated() {
    this.checkEdge()
  },
  methods: {
    checkEdge: function() {
      const containerDom = this.$el
      const { top, left, width, height } = containerDom.getBoundingClientRect()
      const clientWidth = window.innerWidth
      const clientHeight = window.innerHeight
      if (top + height > clientHeight) {
        containerDom.style.cssText += `top:${clientHeight - height}px`
      }
      if (left + width > clientWidth) {
        containerDom.style.cssText += 'transform:translateX(-110%)'
      }
      if (left + width > clientWidth && top + height > clientHeight) {
        containerDom.style.cssText += `top:${clientHeight - height}px translateX(-110%)`
      }
    }
  }
}

export { edgeDetect }
