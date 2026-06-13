import DeviceTimeline from "../components/DeviceTimeline";
import { ipodModels } from "../data/ipodHistory";
import { ipodImage } from "../lib/deviceImages";

export default function IPodHistory() {
  return (
    <DeviceTimeline
      eyebrow="iPod History"
      lineTop="Every iPod."
      lineBottom="2001 to 2019."
      blurb={`The device that changed music — from the original scroll-wheel iPod to the final iPod touch. ${ipodModels.length} models across the iPod era. Tap any model to explore.`}
      models={ipodModels}
      imageFor={ipodImage}
    />
  );
}
