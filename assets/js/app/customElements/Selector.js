import { render, h } from '../../horseless/0.5.3.min.esm.js'

export const Selector = 'app-selector'

window.customElements.define(
  Selector,
  class extends window.HTMLElement {
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
    }

    connectedCallback () {
      render(
        this.shadowRoot,
        h`
          <style>
            :host {
              height: 2rem;
              background: white;
            }
          </style>
        `
      )
    }
  }
)
