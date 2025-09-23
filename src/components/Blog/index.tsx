import React, { useEffect, useState } from "react";
import type { Blog } from "@/types/blog";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { fetchBlogData } from "@/lib/fetchblogdata";

const Blog = () => {
  const [blogData, setBlogData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogData();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {Array.isArray(blogData) && blogData.length > 0 ? (
              blogData.map((blog) => (
                <div key={blog.id} className="w-full">
                  <SingleBlog blogId={blog.id} />
                </div>
              ))
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
