namespace CustomEventMechanism1 {
  // Polyfill for CustomEvent:
  // https://developer.mozilla.org/en/docs/Web/API/CustomEvent
  (function () {
    //@ts-ignore
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined,
      };
      const evt = <any>document.createEvent("CustomEvent");
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      return evt;
    }
    CustomEvent.prototype = (<any>window).Event.prototype;
    (<any>window).CustomEvent = CustomEvent;
  })();

  // Fix for lib.d.ts
  interface StandardEvent {
    new (name: string, obj: {}): CustomEvent;
  }

  var StandardEvent = <StandardEvent>(<any>CustomEvent);

  // Code for custom events is below:
  enum EventType {
    MyCustomEvent,
  }

  class Trigger {
    static customEvent(name: string, detail: {}) {
      const event = new StandardEvent(name, detail);
      document.dispatchEvent(event);
    }
  }

  class ListeningClass {
    constructor() {
      document.addEventListener(
        EventType[EventType.MyCustomEvent],
        this.eventListener,
        false
      );
    }
    eventListener(e: Event) {
      console.log(
        EventType[EventType.MyCustomEvent] + " detected by ClickLogger."
      );
      console.log("Information passed: " + (<any>e).detail.example);
    }
  }

  var customLogger = new ListeningClass();
  
  Trigger.customEvent(EventType[EventType.MyCustomEvent], {
    detail: {
      example: "Example Value",
    },
  });
}

namespace CustomEventMechanism2 {
  class ClickLogger {
    constructor() {
      this.addElements();
    }

    addElements = () => {
      let div = document.createElement("div");
      div.setAttribute("id", "myDiv");
      div.innerHTML =
        "<strong>Hi there!</strong> You've read an important message.";
      document.body.append(div);

      div.addEventListener(
        "cat",
        function (e: CustomEvent) {
          console.log(e.detail);
        }.bind(this)
      );
    };

    writeMessage() {
      console.log("hello");

      let customEvent = new CustomEvent("cat", { detail: 3 });

      document.getElementById("myDiv").dispatchEvent(customEvent);
    }
  }
  const clickLogger = new ClickLogger();
  clickLogger.writeMessage();
}
