import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { wisp } from "@/lib/wisp";
import Navbar from "../navbar";
import AdUnit from "../components/AdUnit";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  
  return (
    <div className="container mx-auto px-5 mb-10">
      <Navbar />
      
      {/* Blog posts grid */}
      <BlogPostsPreview posts={result.posts} />
      
      {/* Ad between posts and pagination */}
      <div className="my-8">
        <AdUnit slot="YOUR_BLOGPAGE_AD_SLOT" format="horizontal" />
      </div>
      
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
};

export default Page;