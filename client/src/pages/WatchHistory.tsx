import DeviceTimeline from "../components/DeviceTimeline";
import WatchRender from "../components/WatchRender";
import { watchModels } from "../data/watchHistory";
import { watchImage } from "../lib/deviceImages";

export default function WatchHistory() {
  return (
    <DeviceTimeline
      eyebrow="Apple Watch History"
      lineTop="Every Apple Watch."
      lineBottom="2015 to today."
      blurb={`From the original 2015 model to Series 11, SE 3, and Ultra 3 — ${watchModels.length} watches and a decade of wrist computing. Tap, drag, or use the arrow keys to explore.`}
      models={watchModels}
      imageFor={watchImage}
      renderVisual={(model, size) => <WatchRender modelId={model.id} size={size} />}
    />
  );
}
