import { LitElement, html } from 'lit-element';
import './components/circle-spinner';

class ZApp extends LitElement {
  // static get styles() {
  // 	return css`...`
  // }

  // static get properties() {
  // 	return { prop: propType };
  // }
  showAlert(text) {
    alert(text);
  }
  render() {
    return html`
      <h3>App 1</h3>
      <circle-spinner
        @click=${() => this.showAlert('Clicked me')}
      ></circle-spinner>
    `;
  }
}
customElements.define('z-app', ZApp);
