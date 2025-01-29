import Card from "../../components/cart";
import cv1 from '../../assets/cart/cv1.jpg'
import cv2 from '../../assets/cart/cv2.jpg'
import cv3 from '../../assets/cart/cv3.jpg'
import cv4 from '../../assets/cart/cv4.jpg'
import cv5 from '../../assets/cart/cv5.jpg'
import cv6 from '../../assets/cart/cv6.jpg'

export default function Cards() {
  return (
    <div className="pt-20 w-[250px] md:w-[700px]  mx-auto grid gap-y-5 grid-cols-1 md:grid-cols-3">
      
      <Card cv={cv1} ratate={30} text={'Music'} rotate='-rotate-[10deg] ' />
      <Card cv={cv2} ratate={30} text={'Sea '} rotate='rotate-[2deg] '/>
      <Card cv={cv3} ratate={30} text={'Sport'} rotate='rotate-[10deg] '/>
      <Card cv={cv4} ratate={30} text={'Umbrella'} rotate='rotate-[10deg] '/>
      <Card cv={cv5} ratate={30} text={'Car'} rotate='-rotate-[2deg] '/>
      <Card cv={cv6} ratate={30} text={'Glasses'} rotate='-rotate-[10deg] '/>
    </div>
  )
}
