import {DirectionAwareHover} from "./DirectionAware";
import Image1 from "../../Assets/1.jpg";
export default function DirectionAwareHoverDemo() {
  const imageUrl = Image1
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
