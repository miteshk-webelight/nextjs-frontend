type ProductDescriptionProps = {
  description: string | null;
};

export function ProductDescription({ description }: Readonly<ProductDescriptionProps>) {
  if (!description) return null;

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Description</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
