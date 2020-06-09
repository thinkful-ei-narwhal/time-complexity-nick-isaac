TOH(4, "A", "C", "B");

function TOH(disk, source, target, aux) {
  if (disk === 1) {
    print(source, target);
    return;
  } else {
    TOH(disk - 1, source, aux, target);
    TOH(1, source, target, aux);
    TOH(disk - 1, aux, target, source);
  }
}

function print(fromColumn, toColumn) {
  console.log(`${fromColumn} -> ${toColumn}`);
}
