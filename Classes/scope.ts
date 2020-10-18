var TUTORIAL = TUTORIAL || {};

TUTORIAL.lostContext = (function () {
  class ClickCounter {
    private count = 0;
    registerClick() {
      this.count++;
      console.log(this.count);
    }
  }

  const clickCounter = new ClickCounter();

  document.getElementById("scope-target-1").onclick =
    clickCounter.registerClick;

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Preserving context with a property and an arrow function
TUTORIAL.preservingContextArrow = (function () {
  class ClickCounter {
    private count = 0;
    registerClick = () => {
      this.count++;
      console.log(this.count);
    };
  }

  const clickCounter = new ClickCounter();

  document.getElementById("scope-target-2").onclick =
    clickCounter.registerClick;

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Preserving context with a closure
TUTORIAL.preservingContextClosure = (function () {
  class ClickCounter {
    private count = 0;
    registerClick() {
      this.count++;
      console.log(this.count);
    }
  }

  const clickCounter = new ClickCounter();

  // you can wrap the call to the instance method in a function to
  // create a closure that keeps the context alongside the function
  document.getElementById("scope-target-3").onclick = function () {
    clickCounter.registerClick();
  };

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Preserving context with bind
// The bind function sets the context for the method.
TUTORIAL.preservingContextBind = (function () {
  class ClickCounter {
    private count = 0;
    registerClick() {
      this.count++;
      console.log(this.count);
    }
  }

  const clickCounter = new ClickCounter();

  const clickHandler = clickCounter.registerClick.bind(clickCounter);

  document.getElementById("scope-target-4").onclick = clickHandler;

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Preserving context and capturing the event
TUTORIAL.preservingContextEventCapturing = (function () {
  class ClickCounter {
    private count = 0;
    registerClick(id: string) {
      this.count++;
      console.log(this.count);
    }
  }
  const clickCounter = new ClickCounter();
  document.getElementById("scope-target-5").onclick = (e) => {
    const target = e.target || e.srcElement;
    clickCounter.registerClick((<Element>target).id);
  };

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// <input type="button" id="target" value="Click me" />

/* 
    If you want to keep a clear divide between responsibilities, follow 
    this guideline; when you need to preserve the scope of a callback, prefer 
    to preserve it when setting up the callback, not by adjusting the class
    itself.
*/