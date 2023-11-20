int sumDivisor(int numero) {
  int somatorio = 0;

  for (int i = 1; i < numero; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      somatorio += i;
    }
  }

  return somatorio;
}

void main() {
  print(sumDivisor(8));
  print(sumDivisor(9));
  print(sumDivisor(10));
  print(sumDivisor(11));
}
