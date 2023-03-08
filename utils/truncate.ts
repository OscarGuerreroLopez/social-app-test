export const Truncate = (input: string) =>
  input.length > 45 ? `${input.substring(0, 45)}...` : input;
