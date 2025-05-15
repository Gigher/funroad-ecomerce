interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
  }>
}

const Page = async ({ params }: Props) => {
  const { category, subcategory } = await params;

  return (
    <div className="p-4 flex flex-col gap-4">
      Category: {category} <br/>
      Subcategory: {subcategory}
    </div>
  )
}

export default Page