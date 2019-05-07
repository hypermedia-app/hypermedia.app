import { LitElement, html } from 'lit-element';
import './plain-shell'

class BuildingExample extends LitElement {
	render() {
		return html`
			<plain-shell use-hash-urls></plain-shell>
		`;
	}
}

customElements.define('building-example', BuildingExample);
