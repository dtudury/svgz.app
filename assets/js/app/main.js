import { render, h } from '../horseless/0.5.3.min.esm.js'
import { Selector } from './customElements/Selector.js'
import { Editor } from './customElements/Editor.js'

render(document.body, h`
  <${Selector}/>
  <${Editor}/>
`)