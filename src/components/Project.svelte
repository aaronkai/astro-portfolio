<script>
	export let project;
</script>

<div class="project">
	<h1><a href={project.url}>{project.title}</a></h1>
	<h2>{project.description}</h2>
	<p>{project.text}</p>
	<img src={project.image} alt="screencap of project" />
</div>

<style>
	.project {
		display: grid;
		padding: 2rem 2rem 4rem 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}
	.project:nth-child(2) {
		background-color: var(--off-black);
	}

	.project:nth-child(2) a {
		color: var(--mint);
	}
	.project:nth-child(2) h2 {
		color: var(--mint);
	}
	.project:nth-child(2) p {
		color: white;
	}

	img {
		/* border: 2px solid var(--nord3); */
		width: 100%;
	}

	.project h1 {
		margin: 0 0 2rem 0;
		font-size: 4rem;
	}

	.project h1 a {
		color: var(--dark-mint);
	}

	h2 {
		margin: 0 0 1.5rem 0;
		font-size: 2rem;
		color: var(--dark-mint);
		text-transform: capitalize;
	}
	p {
		margin: 0 0 2rem 0;
	}
	img {
		margin-top: 2rem;
		border: 2px solid var(--off-black);
	}
</style>
