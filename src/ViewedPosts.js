export default function ViewedPosts({ post }) {
  return (
    <li>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  );
}
