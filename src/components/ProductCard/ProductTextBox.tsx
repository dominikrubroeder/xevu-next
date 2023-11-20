import { useRouter } from "next/navigation";
import { Product, Variant } from "@/interfaces";

export default function ProductTextBox({
  product,
  selectedVariant,
}: {
  product: Product;
  selectedVariant: Variant;
}) {
  const router = useRouter();
  if (!product) return null;

  return (
    <header className="grid gap-2">
      <div>
        <div>{product.manufacturer}</div>
        <h2
          className="font-bold"
          onClick={() =>
            router.push(
              `product/${product.id}?variant=${selectedVariant.title.replaceAll(
                " ",
                "-",
              )}`,
            )
          }
        >
          {product.title}
        </h2>
        <div>
          {product.category.split("/")[product.category.split("/").length - 1]}
        </div>
      </div>
      <div className="font-bold">{product.variants[0].price} €</div>
    </header>
  );
}
