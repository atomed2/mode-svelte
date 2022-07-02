/*
	If you are looking for the library checkout the lib/ directory,
	this is sample code for the demo.
*/

const code = `<script>
	import viteLogo from '/vite.svg'
	import svelteLogo from './assets/svelte.svg'
	import Counter from './lib/Counter.svelte'
</script>

<main>
	<div>
		<a href="https://vitejs.dev" target="_blank"> 
			<img src={viteLogo} class="logo" alt="Vite Logo" />
		</a>
		<a href="https://svelte.dev" target="_blank"> 
			<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
		</a>
	</div>
	<h1>Vite + Svelte</h1>

	<div class="card">
		<Counter />
	</div>

	<p>
		Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!
	</p>

	<p class="read-the-docs">
		Click on the Vite and Svelte logos to learn more
	</p>
</main>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
`

window.onload = function(e) {
	let editor = CodeMirror(document.getElementById("cmArea"), {
		lineNumbers: true,
		theme: "base16-dark",
		mode: "svelte",
		scrollbarStyle: "native",
		value: code
	});
	editor.setSize("100%", "100%");
	editor.refresh();
}