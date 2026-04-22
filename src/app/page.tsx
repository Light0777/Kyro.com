import { Footer } from "@/components/Footer";
import Home from "./home/home";
import Navbar from "./navbar";
import AdUnit from "./components/AdUnit";

const Page = async (
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) => {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full mx-auto mb-10 overflow-hidden">
      <Navbar />
      
      {/* Main Homepage Content */}
      <Home />
      
      {/* Ad between homepage sections */}
      <div className="my-8 px-4">
        <AdUnit slot="YOUR_HOMEPAGE_AD_SLOT" format="horizontal" />
      </div>
      
      <Footer />
    </div>
  );
};

export default Page;