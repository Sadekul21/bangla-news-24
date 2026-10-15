const LoadingPage = () => {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-12">
      {/* Spinner */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-rose-100" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-rose-700" />
      </div>

      {/* Brand + text */}
      <h2 className="mt-6 text-xl font-bold text-gray-900">Bangla News 24</h2>
      <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
        খবর লোড হচ্ছে
        <span className="flex gap-0.5">
          <span className="h-1 w-1 animate-bounce rounded-full bg-rose-700 [animation-delay:-0.3s]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-rose-700 [animation-delay:-0.15s]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-rose-700" />
        </span>
      </p>

      {/* Skeleton cards */}
      <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div className="h-40 bg-rose-50" />
            <div className="space-y-3 p-4">
              <div className="h-3 w-16 rounded bg-rose-100" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-4/5 rounded bg-gray-200" />
              <div className="h-3 w-2/5 rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingPage;
