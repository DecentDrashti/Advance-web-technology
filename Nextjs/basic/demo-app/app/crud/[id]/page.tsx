import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getPostById(id: number): Promise<Post | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostById(Number(params.id));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-lg">

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {post?.title ?? "Post Not Found"}
        </h1>

        {/* Post Details */}
        {post ? (
          <div className="space-y-4">
            <p className="text-gray-600">
              <span className="font-semibold">Post ID:</span> {post.id}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">User ID:</span> {post.userId}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {post.body}
            </p>
          </div>
        ) : (
          <p className="text-red-500 text-center">
            No post found with this ID.
          </p>
        )}

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            href="/posts"
            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Back to Posts
          </Link>
        </div>

      </div>
    </div>
  );
}
