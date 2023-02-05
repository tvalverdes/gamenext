import { useRouter } from 'next/router'

export default function CategoryName() {
  const router = useRouter();
  const categoryName = router.query.categoryName;
  return(
  <>
  <p>Post: {categoryName}</p>
  </>
  );
}