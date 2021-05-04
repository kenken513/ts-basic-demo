export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('sample1', typeof maybeNumber, maybeNumber);
  
  const isFoo = maybeNumber === "foo"
  console.log('sample2', typeof isFoo, isFoo);

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('sample3', typeof sum, sum);
  }
}