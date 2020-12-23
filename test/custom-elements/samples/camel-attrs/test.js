import * as assert from 'assert';
import './main.svelte';

export default async function (target) {
	target.innerHTML = '<custom-element my-var-name="42"></custom-element>';
	const el = target.querySelector('custom-element');

	const p = el.shadowRoot.querySelector('p');
	assert.equal(p.textContent, '42');
}
