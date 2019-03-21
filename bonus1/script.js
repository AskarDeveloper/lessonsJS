for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j) {
      continue;
    }
    count ++;
  }
  if (count == 1) document.write(i + " - делители этого числа: 1 и " + i + "</br>");
}