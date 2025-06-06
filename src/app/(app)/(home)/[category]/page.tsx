import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";
import {
  ProductList,
  ProductListSkeleton,
} from "@/modules/products/ui/components/product-list";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const category = (await params).category;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.products.getMany.queryOptions({
    subcategorySlug: category
  }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList category={category} />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
