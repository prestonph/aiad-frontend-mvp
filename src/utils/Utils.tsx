export function parseJsonString(jsonString: string) {
  try {
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } catch (error) {
    console.error("Error parsing JSON string:", error);
    return null;
  }
}
