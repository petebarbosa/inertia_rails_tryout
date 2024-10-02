export default function Post({ post }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Title:</strong>
        {post.title?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Body:</strong>
        {post.body?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Published at:</strong>
        {post.published_at?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Published status:</strong>
        {post.published_status?.toString()}
      </p>
    </div>
  )
}
