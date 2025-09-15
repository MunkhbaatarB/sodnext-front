// lib/fetchBlogData.ts
export async function fetchBlogData() {
  const res = await fetch("http://194.163.170.83/api/news", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Blog data fetch хийхэд алдаа гарлаа");
  }

  return res.json();
}
