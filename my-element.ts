import { LitElement, html, css, customElement, property } from "lit-element";

@customElement("my-element")
export class MyElement extends LitElement {
  static get styles() {
    return css`
      .mood {
        color: green;
      }
    `;
  }

  @property({ type: String })
  mood = "";

  render() {
    return html`
      Web Components are <span class="mood">${this.mood}</span>!
    `;
  }
}
