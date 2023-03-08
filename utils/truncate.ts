export const Truncate = (input: string) =>
  input.length > 15 ? `${input.substring(0, 35)}...` : input;
