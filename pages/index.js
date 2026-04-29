export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = [{ slug: 'hello', title: 'Hello World' }];
  return { props: { posts } };
}
