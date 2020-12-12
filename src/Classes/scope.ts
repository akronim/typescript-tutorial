namespace LostContext {
  class ClickCounter {
    private count = 0;
    registerClick() {
      this.count++;
      console.log(this.count);
    }
  }

  const clickCounter = new ClickCounter();

  const target_1 = document.getElementById("scope-target-1");
  target_1 && (target_1.onclick = clickCounter.registerClick);
}

// Preserving context with a property and an arrow function
namespace PreservingContextArrow {
  class ClickCounter {
    private count = 0;
    registerClick = () => {
      this.count++;
      console.log(this.count);
    };
  }

  const clickCounter = new ClickCounter();

  const target_2 = document.getElementById("scope-target-2");

  target_2 && (target_2.onclick = clickCounter.registerClick);
}

// Preserving context with a closure
namespace PreservingContextClosure {
  class ClickCounter {
    private count = 0;
    registerClick() {
      this.count++;
      console.log(this.count);
    }
  }

  const clickCounter = new ClickCounter();

  const target_3 = document.getElementById("scope-target-3");

  // you can wrap the call to the instance method in a function to
  // create a closure that keeps the context alongside the function
  if (target_3) {
    target_3.onclick = function () {
      clickCounter.registerClick();
    };
  }
}

// Preserving context with bind
// The bind function sets the context for the method.
namespace PreservingContextBind {
  class ClickCounter {
    private count = 0;
    registerClick() {
      this.count++;
      console.log(this.count);
    }
  }

  const clickCounter = new ClickCounter();

  const clickHandler = clickCounter.registerClick.bind(clickCounter);

  const target_4 = document.getElementById("scope-target-4");

  target_4 && (target_4.onclick = clickHandler);
}

// Preserving context and capturing the event
namespace PreservingContextEventCapturing {
  class ClickCounter {
    private count = 0;
    registerClick(id: string) {
      this.count++;
      console.log(this.count);
    }
  }
  const clickCounter = new ClickCounter();

  const target_5 = document.getElementById("scope-target-5");

  if (target_5) {
    target_5.onclick = (e) => {
      const target = e.target || e.srcElement;
      clickCounter.registerClick((<Element>target).id);
    };
  }
}

/* 
    If you want to keep a clear divide between responsibilities, follow 
    this guideline; when you need to preserve the scope of a callback, prefer 
    to preserve it when setting up the callback, not by adjusting the class
    itself.
*/

/*
  <body>
    <div id="myId"></div>
    <input type="button" id="scope-target-1" value="Click me" />
    <input type="button" id="scope-target-2" value="Click me" />
    <input type="button" id="scope-target-3" value="Click me" />
    <input type="button" id="scope-target-4" value="Click me" />
    <input type="button" id="scope-target-5" value="Click me" />
  </body>

*/
