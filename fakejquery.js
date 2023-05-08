function $(selector) {
  if (selector instanceof Window || selector instanceof Document) {
    return selector
  }
  return document.querySelector(selector)
}

Window.prototype.resize = function (callback) {
  this.addEventListener("resize", callback, false)
  return
}
Window.prototype.width = function () {
  return this.innerWidth
}

HTMLElement.prototype.find = function (selector) {
  return this.querySelector(selector)
}
HTMLElement.prototype.text = function (text) {
  this.textContent = text
  return text
}
HTMLElement.prototype.html = function (html) {
  this.innerHTML = html
  return
}
HTMLElement.prototype.slideToggle = function (duration = 400) {
  if (window.getComputedStyle(this).display === "none") {
    return slideDown(this, duration)
  } else {
    return slideUp(this, duration)
  }

  function slideUp(target, duration) {
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + "ms"
    target.style.boxSizing = "border-box"
    target.style.height = target.offsetHeight + "px"
    target.offsetHeight
    target.style.overflow = "hidden"
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    window.setTimeout(() => {
      target.style.display = "none"
      target.style.removeProperty("height")
      target.style.removeProperty("padding-top")
      target.style.removeProperty("padding-bottom")
      target.style.removeProperty("margin-top")
      target.style.removeProperty("margin-bottom")
      target.style.removeProperty("overflow")
      target.style.removeProperty("transition-duration")
      target.style.removeProperty("transition-property")
    }, duration)
  }

  function slideDown(target, duration) {
    target.style.removeProperty("display")
    let display = window.getComputedStyle(target).display

    if (display === "none") display = "block"

    target.style.display = display
    let height = target.offsetHeight
    target.style.overflow = "hidden"
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.boxSizing = "border-box"
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + "ms"
    target.style.height = height + "px"
    target.style.removeProperty("padding-top")
    target.style.removeProperty("padding-bottom")
    target.style.removeProperty("margin-top")
    target.style.removeProperty("margin-bottom")
    window.setTimeout(() => {
      target.style.removeProperty("height")
      target.style.removeProperty("overflow")
      target.style.removeProperty("transition-duration")
      target.style.removeProperty("transition-property")
    }, duration)
  }
}
