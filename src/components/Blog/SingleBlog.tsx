"use client"; // Required if using Next.js 13+ app directory for client-side fetching

import React, { useEffect, useState } from "react";
import type { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogData } from "@/lib/fetchblogdata";

const SingleBlog: React.FC<{ blogId: number }> = ({ blogId }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlogData(); // Fetch all blogs
        const blogs: Blog[] = response.data;

        // Find the blog by ID
        const single = blogs.find((b) => b.id === blogId);
        if (single) {
          setBlog(single);
        } else {
          setError("Blog олдсонгүй");
        }
      } catch (err) {
        console.error(err);
        setError("Blog авах явцад алдаа гарлаа");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [blogId]);

  if (loading) return <p>Loading...</p>;
  if (error || !blog) return <p>{error}</p>;

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <Link
        href={`/blog-sidebar/${blog.id}`}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {blog.tags && blog.tags.length > 0 ? blog.tags[0] : "Мэдээ"}
        </span>
        <div className="relative aspect-[37/22] w-full">
          <Image
            src={
              blog.thumbnail && blog.thumbnail.startsWith("http")
                ? blog.thumbnail
                : "/images/blog/blog-01.jpg"
            }
            alt={blog.title || "Blog thumbnail"}
            fill
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-6 sm:p-8">
        <h3>
          <Link
            href={`/blog/${blog.id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {blog.title || "Гарчиг байхгүй"}
          </Link>
        </h3>

        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {blog.content
            ? blog.content.slice(0, 150) + "..."
            : "Агуулга байхгүй"}
        </p>

        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-dark dark:text-white">
            {blog.author ? `Нийтэлсэн ${blog.author}` : " Тодорхойгүй"}
          </h4>
          <p className="text-xs text-body-color">
            {blog.created_at
              ? new Date(blog.created_at).toLocaleDateString()
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
