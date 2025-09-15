import React, { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://sodtech.mn/sod-backend/api/menu");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
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
          // Conditional rendering to ensure `blogData` is an array
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {Array.isArray(blogData) && blogData.length > 0 ? (
              blogData.map((blog) => (
                <div key={blog.id} className="w-full">
                  <SingleBlog />
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
