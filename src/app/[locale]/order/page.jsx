
import styles from '../../../../styles/order.module.css'
import dynamic from 'next/dynamic'

const Ordercomponent = dynamic(() => import('../../components/sub/Ordercompnonent'), {
  ssr: false,
});

export const metadata = {
  title: "Order",
  description: "Fill out this form to submit your order and start your Tech path",
}
export default function Order(){
  return(
    <Ordercomponent className={styles.container1}/>
  )
}