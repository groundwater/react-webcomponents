export function componentize(template) {
  let frag = document.createElement('div')
      frag.innerHTML = template

  var templates = frag.querySelectorAll('template')

  for (let i=0; i<templates.length; i++) {
    let tmpl  = templates[i]
    let proto = Object.create(HTMLElement.prototype)

    proto.createdCallback = function() {
      var root = this.createShadowRoot()
      var clon = document.importNode(tmpl.content, true)

      root.appendChild(clon)
    }

    document.registerElement(tmpl.getAttribute('name'), {
      prototype: proto
    })
  }
}
