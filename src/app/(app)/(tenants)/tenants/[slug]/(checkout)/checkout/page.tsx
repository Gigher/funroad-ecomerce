import { CheckoutView } from "@/modules/checkout/ui/views/checkout-view";

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamic = "force-dynamic";

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  return <CheckoutView tenantSlug={slug} />
}

export default Page