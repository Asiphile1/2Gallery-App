import * as Permissions from "expo-permissions";

export const requestPermission = async (type) => {
  const { status } = await Permissions.askAsync(type);
  return status === "granted";
};
