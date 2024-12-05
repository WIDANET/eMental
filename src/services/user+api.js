import { ExpoResponse } from "expo-router/server";

export async function GET() {
  return ExpoResponse.json({
    message: "Essa é uma resposta do back-end mobile!",
  });
}