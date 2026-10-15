
import Link from "next/link";

const links = [
  { label: "রাজনীতি", href: "/politics" },
  { label: "বিশ্ব", href: "/world" },
  { label: "অর্থনীতি", href: "/economy" },
  { label: "খেলা", href: "/sports" },
];

const NotFound = () => {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-white px-6 py-16">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-50" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rose-50" />

      {/* Large watermark number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute select-none text-[14rem] font-black leading-none text-rose-100 sm:text-[20rem]"
      >
        404
      </span>

      <div className="relative z-10 max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-700">
          ত্রুটি ৪০৪
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-rose-700" />

        <p className="mt-5 leading-relaxed text-gray-600">
          আপনি যে পেজটি খুঁজছেন সেটি সরিয়ে নেওয়া হয়েছে, নাম পরিবর্তন করা
          হয়েছে, অথবা লিংকটি সঠিক নয়। অনুগ্রহ করে ঠিকানাটি যাচাই করুন কিংবা
          নিচের লিংক থেকে এগিয়ে যান।
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="btn border-none bg-rose-700 px-6 text-white shadow-sm hover:bg-rose-800"
          >
            হোমপেজে ফিরে যান
          </Link>
          <Link
            href="/signin"
            className="btn border-gray-300 bg-white px-6 text-gray-700 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
          >
            সাইন ইন
          </Link>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-400">
            জনপ্রিয় বিভাগ
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-rose-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
