import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";

export default function ArticleID() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <Navbar />
        <div className="flex justify-center items-center h-72">
          <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-screen-xl mx-auto p-4">
        <Navbar />
        <h1 className="text-center text-2xl mt-20">Article not found</h1>
      </div>
    );
  }

  const readingTime = Math.max(
    1,
    Math.ceil(article.markdown.split(/\s+/).length / 200),
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-5">
      <Navbar />

      <article className="bg-white rounded-2xl shadow-xl overflow-hidden mt-6">
        {/* Header */}

        <div className="p-10">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>

          {article.description && (
            <p className="text-xl text-gray-500 mt-5">{article.description}</p>
          )}

          {/* Meta */}

          <div className="flex flex-wrap gap-6 mt-8 text-gray-500 text-sm">
            <span>👤 {article.author}</span>

            <span>📅 {new Date(article.createdAt).toLocaleDateString()}</span>

            <span>✍ {readingTime} min read</span>

            {article.updatedAt && (
              <span>
                🔄 Updated {new Date(article.updatedAt).toLocaleDateString()}
              </span>
            )}

            {article.views !== undefined && (
              <span>👁 {article.views} Views</span>
            )}
          </div>

          {/* Category */}

          {article.category && (
            <div className="mt-6">
              <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
          )}

          {/* Tags */}

          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Cover Image */}

        {article.photo && (
          <img
            src={article.photo}
            alt={article.title}
            className="w-full h-[500px] object-cover"
          />
        )}

        {/* Content */}

        <div className="p-10">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{article.markdown}</ReactMarkdown>
          </div>
        </div>

        {/* Footer */}

        <div className="border-t px-10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold">Thanks for reading!</h3>

              <p className="text-gray-500 mt-2">
                If you found this article helpful, feel free to share it.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                className="border rounded-lg px-5 py-2 hover:bg-gray-100 transition"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article link copied!");
                }}
              >
                📋 Copy Link
              </button>

              <Link
                to="/articles"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition"
              >
                ← Back to Articles
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
