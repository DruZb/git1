let world = new Map([
  ['Moscow', 'Russia'],
  ['London', 'Ingland'],
  ['Madrid', 'Spain'],
  ['Paris', 'France']
]);
for(let capital of world.keys()) {
  console.log('����'+'-'+ capital)
};
for(let country of world.values()) {
  console.log('��������'+'-'+ country)
};