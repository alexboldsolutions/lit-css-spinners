import { LitElement, html, css } from 'lit-element';

class CircleSpinner extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        width: fit-content;
        /* background-color: lightblue;
			width:100px;
			height:100px; */
      }
      .lds-facebook {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #000;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      }
      .lds-facebook div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
      }
      .lds-facebook div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
      }
      .lds-facebook div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
      }
      @keyframes lds-facebook {
        0% {
          top: 8px;
          height: 64px;
        }
        50%,
        100% {
          top: 24px;
          height: 32px;
        }
      }
    `;
  }

  // static get properties() {
  // 	return { prop: propType };
  // }

  render() {
    return html`
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
  }
}
customElements.define('circle-spinner', CircleSpinner);
