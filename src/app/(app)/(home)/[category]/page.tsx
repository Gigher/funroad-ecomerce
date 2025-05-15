interface Props {
  params: Promise<{
    category: string;
  }>
}

const Page = async ({ params }: Props) => {
  const { category } = await params;

  return (
    <div className="p-4 flex flex-col gap-4">
      Category: {category}
    </div>
  )
}

export default Page