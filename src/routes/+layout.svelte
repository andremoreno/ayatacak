<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import Home from "../lib/components/home.svelte";
	import About from "../lib/components/about.svelte";
	
    import 'nprogress/nprogress.css';

	NProgress.configure({ minimum: 0.16 });

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	import "../app.css";
</script>

<Home />
<About />

<slot />