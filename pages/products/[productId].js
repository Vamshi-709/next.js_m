/* eslint-disable react-hooks/rules-of-hooks */
import {useRouter} from 'next/router'
function productDetails () {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>productDetails {productId}</div>
  )
}

export default productDetails 