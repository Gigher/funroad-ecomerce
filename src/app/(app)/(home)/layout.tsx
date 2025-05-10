import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Category } from "@/payload-types";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";

interface Props {
  children: Readonly<React.ReactNode>;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // Populate subcategories, subcategories.[0] will be a type of "Category"
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Because of "depth: 1" we are confident "doc" will be a type of "Category"
      ...(doc as Category),
      subcategories: undefined
    }))
  }))

  console.log({
    data,
    formattedData
  })

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
