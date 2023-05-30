import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  createRenderRoot() {
    return this; // turn off shadow dom to access external styles
  }

  @property()
  name = 'Somebody';

  render() {
    return html`<button class="btn btn-primary">Hello, ${this.name}!</button>`;
  }
}
