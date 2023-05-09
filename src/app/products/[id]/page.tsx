interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params: { id } }: Props) {
  return (
    <>
      <p>상품 디테일 페이지</p>
    </>
  );
}
