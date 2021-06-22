export function classes(args: string[]) {
  return args.join(" ");
}

export function basketItems(
  arr: {
    id: string;
    amount: number;
  }[]
) {
  return arr.map((el) => el.amount).reduce((a, b) => a + b);
}
