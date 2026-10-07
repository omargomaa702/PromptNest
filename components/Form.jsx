import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center mb-16">
      {/* Header */}
      <div className="w-full text-center mb-10">
        <h1 className="head_text">
          <span className="blue_gradient">{type}</span> Post
        </h1>

        <p className="desc max-w-2xl mx-auto mt-4">
          {type} and share amazing prompts with the world, and let your
          imagination run wild with any AI-powered platform.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl glassmorphism rounded-3xl p-8 md:p-10 flex flex-col gap-8"
      >
        {/* Prompt */}
        <label className="flex flex-col gap-3">
          <span className="font-satoshi font-semibold text-lg text-gray-800">
            Your AI Prompt
          </span>

          <span className="text-sm text-gray-500">
            Write a clear and useful prompt that others can discover and use.
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="w-full min-h-[220px] resize-y rounded-2xl border border-gray-200 bg-white/70 px-5 py-4 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </label>

        {/* Tag */}
        <label className="flex flex-col gap-3">
          <span className="font-satoshi font-semibold text-lg text-gray-800">
            Tag
          </span>

          <span className="text-sm text-gray-500">
            Add a tag to help people discover your prompt.
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#webdevelopment"
            required
            className="w-full rounded-2xl border border-gray-200 bg-white/70 px-5 py-4 text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />

          <span className="text-xs text-gray-400">
            Examples: #productivity&nbsp;&nbsp; #coding&nbsp;&nbsp; #ai
          </span>
        </label>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-3 border-t border-gray-200/70">
          <Link
            href="/"
            className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-800"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-primary-orange px-7 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
