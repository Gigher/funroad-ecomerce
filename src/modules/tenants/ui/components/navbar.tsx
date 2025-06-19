"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ShoppingCartIcon } from "lucide-react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { generateTenantUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  slug: string;
}

export const Navbar = ({ slug }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.tenants.getOne.queryOptions({ slug }));

  const CheckoutButton = dynamic(
    () =>
      import("@/modules/checkout/ui/components/checkout-button").then(
        (mod) => mod.CheckoutButton
      ),
    {
      ssr: false,
      loading: () => (
        <Button variant="elevated" disabled className="bg-white">
          <ShoppingCartIcon />
        </Button>
      ),
    }
  );

  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <Link
          href={generateTenantUrl(slug)}
          className="flex items-center gap-2"
        >
          {data.image?.url && (
            <Image
              src={data.image?.url}
              width={32}
              height={32}
              className="rounded-full border shrink-0 size-[32px]"
              alt={slug}
            />
          )}
          <p className="text-xl capitalize">{data.name}</p>
        </Link>
        <CheckoutButton hideIfEmpty tenantSlug={slug} />
      </div>
    </nav>
  );
};
export const NavbarSkeleton = () => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
      <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
        <Button variant="elevated" disabled className="bg-white">
          <ShoppingCartIcon />
        </Button>
      </div>
    </nav>
  );
};
