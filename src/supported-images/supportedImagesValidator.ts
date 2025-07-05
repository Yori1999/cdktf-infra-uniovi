export function validateImageExists(imageIdentifier: string): void {
  if (!imageIdentifier || imageIdentifier.trim().length === 0) {
    throw new Error(
      "This version of the machine doesn't exist for the given provider",
    );
  }
}
