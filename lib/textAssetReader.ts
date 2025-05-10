import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";

export async function readTextAsset(filename: string) {
  const nodeRequire = require(`@/assets/${filename}`);
  const asset = Asset.fromModule(nodeRequire);
  await asset.downloadAsync();
  if (asset.localUri) {
    const fileContents = await readAsStringAsync(asset.localUri);
    return fileContents;
  }
}
