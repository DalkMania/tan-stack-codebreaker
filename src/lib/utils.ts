import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function mergeArraysToMap(keys: string[], values: string[]): { [key: string]: string } {
  if (keys.length !== values.length) {
    throw new Error("The number of keys and values must be the same.");
  }

  // Use reduce to create the key/value map
  const mergedMap: { [key: string]: string } = keys.reduce(
    (map, key, index) => {
      if ((key && !values[index]) || (!key && values[index])) throw new Error("invalid key/pair");

      if (key && values[index]) map[key] = values[index];
      return map;
    },
    {} as Record<string, string>
  );

  return mergedMap;
}

const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function getSymbolsForLetters() {
  const letters = [..."abcdefghijklmnopqrstuvwxyz"];
  const symbols = [
    "enable",
    "public",
    "grade",
    "rocket",
    "cookie",
    "thunderstorm",
    "face",
    "skull",
    "home",
    "mode_cool",
    "bedroom_baby",
    "flatware",
    "single_bed",
    "sprinkler",
    "umbrella",
    "token",
    "skillet",
    "stadia_controller",
    "airwave",
    "floor_lamp",
    "close",
    "quiet_time",
    "heat",
    "tools_power_drill",
    "nest_eco_leaf",
    "air_freshener",
  ];
  const shuffled = shuffle(symbols);
  return mergeArraysToMap(letters, shuffled);
}
