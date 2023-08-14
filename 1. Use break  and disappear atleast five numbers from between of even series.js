let count = 0;
let num = 0;

while (count < 5) {
  num += 2;

  if (num === 10 || num === 12 || num === 14 || num === 16 || num === 18) {
    continue;
  }

  document.write(num + " ");

  count++;
}
