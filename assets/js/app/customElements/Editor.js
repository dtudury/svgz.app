import { render, h } from '../../horseless/0.5.3.min.esm.js'
import { Controls } from './Controls.js'

export const Editor = 'app-editor'

window.customElements.define(
  Editor,
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
              flex: 1;
              position: relative;
              display: flex;
              flex-direction: column;
              background: lightgray;
            }
          </style>
          <${Controls}/>
        `
      )
    }
  }
)
