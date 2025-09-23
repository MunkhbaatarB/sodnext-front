// app/blog/page.tsx
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Blog as BlogType } from "@/types/blog";
import { fetchBlogData } from "@/lib/fetchblogdata";

export default async function BlogPage() {
  // Fetch blogs on the server
  const response = await fetchBlogData();
  const blogs: BlogType[] = response.data; // Adjust according to your API

  return (
    <>
      <Breadcrumb
        pageName="Мэдээ мэдээлэл"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. sfasd"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleBlog blogId={blog.id} />
                </div>
              ))
            ) : (
              <p>Блог олдсонгүй</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
