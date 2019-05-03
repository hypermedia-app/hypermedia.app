import { LitElement, html } from 'lit-element';

class BuildingExample extends LitElement {
	render() {
		return html`
			<h1>Hello world!</h1>
		`;
	}
}

customElements.define('building-example', BuildingExample);
