import DeviceTimeline from "../components/DeviceTimeline";
import { watchModels } from "../data/watchHistory";
import { watchImage } from "../lib/deviceImages";

export default function WatchHistory() {
  return (
    <DeviceTimeline
      eyebrow="Apple Watch History"
      lineTop="Every Apple Watch."
      lineBottom="2015 to today."
      blurb={`From the original 2015 model to the latest Series 10 and Ultra — ${watchModels.length} watches and a decade of wrist computing. Tap any model for the full story.`}
      models={watchModels}
      imageFor={watchImage}
    />
  );
}
