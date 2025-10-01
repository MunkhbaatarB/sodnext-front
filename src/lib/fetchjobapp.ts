// lib/fetchblogdata.ts
export async function fetchJobApp() {
  const res = await fetch(
    "https://sodtech.mn/sod-admin/public/api/job-applications",
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Blog data fetch хийхэд алдаа гарлаа: ${res.status} - ${text}`,
    );
  }

  return res.json();
}
