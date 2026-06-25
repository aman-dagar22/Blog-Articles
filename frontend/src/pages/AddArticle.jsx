import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AddArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [photo, setPhoto] = useState("");
  const [author, setAuthor] = useState("");

  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState("");
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState("Published");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const article = {
      title,
      description,
      markdown,
      photo,
      author,
      category,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
      featured,
      status,
    };

    try {
      const response = await fetch("http://localhost:3000/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(article),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Article added successfully!");

        setTitle("");
        setDescription("");
        setMarkdown("");
        setPhoto("");
        setAuthor("");
        setCategory("Technology");
        setTags("");
        setFeatured(false);
        setStatus("Published");

        setTimeout(() => {
          window.location.href = "/articles";
        }, 1200);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to add article");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <div className="min-h-screen bg-black py-10 px-5">
        <div className="max-w-3xl mx-auto bg-neutral-900 rounded-xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-pink-500 text-center mb-8">
            Publish New Article
          </h1>

          {message && (
            <p className="text-center text-green-400 mb-6">{message}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}

            <div>
              <label className="block text-gray-300 mb-2">Article Title</label>

              <input
                type="text"
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description */}

            <div>
              <label className="block text-gray-300 mb-2">
                Short Description
              </label>

              <textarea
                rows="3"
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Cover Image */}

            <div>
              <label className="block text-gray-300 mb-2">
                Cover Image URL
              </label>

              <input
                type="text"
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            {/* Category */}

            <div>
              <label className="block text-gray-300 mb-2">Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white"
              >
                <option>Technology</option>
                <option>Programming</option>
                <option>Web Development</option>
                <option>Artificial Intelligence</option>
                <option>Data Science</option>
                <option>Career</option>
                <option>General</option>
              </select>
            </div>

            {/* Tags */}

            <div>
              <label className="block text-gray-300 mb-2">Tags</label>

              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
              />
            </div>
            {/* Author */}

            <div>
              <label className="block text-gray-300 mb-2">Author</label>

              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                required
              />
            </div>

            {/* Markdown */}

            <div>
              <label className="block text-gray-300 mb-2">
                Article Content (Markdown)
              </label>

              <textarea
                rows="16"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Write your article here..."
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                required
              />
            </div>

            {/* Featured */}

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-5 h-5 accent-pink-500"
              />

              <label className="text-gray-300">Featured Article</label>
            </div>

            {/* Status */}

            <div>
              <label className="block text-gray-300 mb-2">Publish Status</label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-white"
              >
                <option value="Published">Published</option>

                <option value="Draft">Draft</option>
              </select>
            </div>

            {/* Preview */}

            <div className="bg-neutral-800 rounded-xl p-5 border border-neutral-700">
              <h2 className="text-white text-xl font-semibold mb-4">
                Article Preview
              </h2>

              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-semibold text-pink-400">Title:</span>{" "}
                  {title || "Not entered"}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">Category:</span>{" "}
                  {category}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">Author:</span>{" "}
                  {author || "Not entered"}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">Tags:</span>{" "}
                  {tags || "None"}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">Status:</span>{" "}
                  {status}
                </p>

                <p>
                  <span className="font-semibold text-pink-400">
                    Estimated Reading Time:
                  </span>{" "}
                  {Math.max(
                    1,
                    Math.ceil(
                      markdown.split(/\s+/).filter(Boolean).length / 200,
                    ),
                  )}{" "}
                  min read
                </p>
              </div>
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 transition duration-300 text-white py-3 rounded-lg text-lg font-semibold"
            >
              {loading ? "Publishing..." : "Publish Article"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
