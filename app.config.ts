export default {
  expo: {
    name: "react-native-template",
    slug: "react-native-template",
    scheme: "react-native-template",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      bundleIdentifier: "react-native.template",
      supportsTablet: true,
    },
    android: {
      package: "react_native.template",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-dev-client", "expo-router", "expo-asset"],
  },
};
