interface Item {
  start: string;
  end: string;
  name: string;
}

type ItemWithColor = Item & { color: string };
