import init, { add } from './pkg/wasm_test.js';

init().then(() => {
  console.log(add(1, 2));
});
