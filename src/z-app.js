import { LitElement, html, css } from 'lit-element';
import './components/circle-spinner'

class ZApp extends LitElement {
	// static get styles() {
	// 	return css`...`
	// }

	// static get properties() {
	// 	return { prop: propType };
	// }

	render() {
		return html`
			<h3>App 1</h3>
			<circle-spinner></circle-spinner>
		`
	}
}
customElements.define('z-app', ZApp);