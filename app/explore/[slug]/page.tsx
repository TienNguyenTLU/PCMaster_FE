import { PcMasterProductDetailPage } from "@/components/pcmaster/PcMasterProductDetailPage";
import { PRODUCT_CATALOG } from "@/components/pcmaster/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCT_CATALOG.map((product) => ({ slug: product.id }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  return <PcMasterProductDetailPage slug={slug} />;
}
