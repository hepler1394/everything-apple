/**
 * Device image manifest — real product photos (transparent PNG)
 * Served from client/public/devices/* at site root /devices/*
 * Source: user-provided high-quality Apple product image set.
 */

const B = "/devices/iphones/";

export const IPHONE_IMAGES: Record<string, string> = {
  "iphone-2g": B + "iPhone__1st_generation_2007_.png",
  "iphone-3g": B + "iPhone_3G.png",
  "iphone-3gs": B + "iPhone_3GS.png",
  "iphone-4": B + "iPhone_4.png",
  "iphone-4s": B + "iPhone_4S.png",
  "iphone-5": B + "iPhone_5.png",
  "iphone-5c": B + "iPhone_5C.png",
  "iphone-5s": B + "iPhone_5S.png",
  "iphone-6": B + "iPhone_6.png",
  "iphone-6-plus": B + "iPhone_6_Plus.png",
  "iphone-6s": B + "iPhone_6S.png",
  "iphone-6s-plus": B + "iPhone_6S_Plus.png",
  "iphone-se-1": B + "iPhone_SE__1st_generation_.png",
  "iphone-7": B + "iPhone_7.png",
  "iphone-7-plus": B + "iPhone_7_Plus.png",
  "iphone-8": B + "iPhone_8.png",
  "iphone-8-plus": B + "iPhone_8_Plus.png",
  "iphone-x": B + "iPhone_X.png",
  "iphone-xr": B + "iPhone_XR.png",
  "iphone-xs": B + "iPhone_XS.png",
  "iphone-xs-max": B + "iPhone_XS_Max.png",
  "iphone-11": B + "iPhone_11.png",
  "iphone-11-pro": B + "iPhone_11_Pro.png",
  "iphone-11-pro-max": B + "iPhone_11_Pro_Max.png",
  "iphone-se-2": B + "iPhone_SE__2nd_generation_.png",
  "iphone-12-mini": B + "iPhone_12_Mini.png",
  "iphone-12": B + "iPhone_12.png",
  "iphone-12-pro": B + "iPhone_12_Pro.png",
  "iphone-12-pro-max": B + "iPhone_12_Pro_Max.png",
  "iphone-13-mini": B + "iPhone_13_Mini.png",
  "iphone-13": B + "iPhone_13.png",
  "iphone-13-pro": B + "iPhone_13_Pro.png",
  "iphone-13-pro-max": B + "iPhone_13_Pro_Max.png",
  "iphone-se-3": B + "iPhone_SE__3rd_generation_.png",
  "iphone-14": B + "iPhone_14.png",
  "iphone-14-plus": B + "iPhone_14_Plus.png",
  "iphone-14-pro": B + "iPhone_14_Pro.png",
  "iphone-14-pro-max": B + "iPhone_14_Pro_Max.png",
  "iphone-15": B + "iPhone_15.png",
  "iphone-15-plus": B + "iPhone_15_Plus.png",
  "iphone-15-pro": B + "iPhone_15_Pro.png",
  "iphone-15-pro-max": B + "iPhone_15_Pro_Max.png",
  "iphone-16": B + "iPhone_16.png",
  "iphone-16-plus": B + "iPhone_16_Plus.png",
  "iphone-16-pro": B + "iPhone_16_Pro.png",
  "iphone-16-pro-max": B + "iPhone_16_Pro_Max.png",
  "iphone-16e": B + "iPhone_16e.png",
};

/** Returns the real photo path for a model id, or null if none exists. */
export function iphoneImage(id: string): string | null {
  return IPHONE_IMAGES[id] ?? null;
}
