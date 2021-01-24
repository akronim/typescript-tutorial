function test() {
  const testStart = performance.now();

  window.setTimeout(function () {
    console.log(performance.now() - testStart);
  }, 50);

  // Simulated long running process
  const start = +new Date();
  while (+new Date() - start < 100) {
    // Delay for 100ms
  }
}

test();

/*
The loop starts after the timer is set up, but because nothing is de-queued 
until the original test function is completed, the timer executes much later 
than before.
*/
