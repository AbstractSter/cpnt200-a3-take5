<script>
  export let data;
</script>

<ul>
  {#each data.art_stuff as blog}
    <h1>{blog.date_created}</h1>
    <h2>{blog.medium}</h2>
    <h3>{blog.author}</h3>
    <h4>{blog.summary}</h4>
    <p>{blog.content}</p>
    <p>{blog.date}</p>
  {/each}
</ul>