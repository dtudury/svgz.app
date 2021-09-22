import { render, h } from '../../horseless/0.5.3.min.esm.js'

export const Controls = 'app-controls'

window.customElements.define(
  Controls,
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
              width: 100%;
              height: 100%;
              position: absolute;
              display: block;
            }
            .controls {
              width: 100%;
              height: 100%;
              display: block;
            }
          </style>
          <svg class="controls">
          </svg>
        `
      )
    }
  }
)
