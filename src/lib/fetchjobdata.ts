// lib/fetchblogdata.ts
export async function fetchJobData() {
  const res = await fetch("http://worldmongolians.com/api/jobs", {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Blog data fetch хийхэд алдаа гарлаа: ${res.status} - ${text}`,
    );
  }

  return res.json();
}
