import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map(name => {
    const file = fs.readFileSync(path.join(postsDirectory, name), 'utf8');
    const { data } = matter(file);
    return { slug: name.replace('.mdx', ''), ...data };
  });
  res.status(200).json(posts);
}
