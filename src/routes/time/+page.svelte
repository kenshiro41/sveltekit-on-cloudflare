<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<div>
		{JSON.stringify(data)}
	</div>
</div>
