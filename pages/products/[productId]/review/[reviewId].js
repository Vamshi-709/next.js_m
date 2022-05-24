/* eslint-disable react-hooks/rules-of-hooks */
import {useRouter} from 'next/router'
function Review() {
    const router = useRouter()
    const {productId,reviewId} = router.query
  return (
    <div>
        Review {reviewId} for  product {productId}
    </div>
  )
}

export default Review