namespace EventListeners {
  class ClickLogger {
    constructor() {
      document.addEventListener("click", this.eventListener);
      this.addElements();
    }

    addElements = () => {
      const x = document.createElement("P");
      const t = document.createTextNode("This is a paragraph.");
      x.appendChild(t);
      document.body.appendChild(x);

      let div = document.createElement("div");
      div.innerHTML =
        "<strong>Hi there!</strong> You've read an important message.";
      document.body.append(div);
    };

    eventListener(e: Event) {
      // (Bubbling Phase)
      // During bubbling, the event is sent to the target element first
      // and then to its ancestors.
      const phase = e.eventPhase;
      const tag = (<HTMLElement>e.target).tagName;

      console.log(`Click event in phase ${phase} detected on element ${tag} by
    ClickLogger.`);
    }
  }
  const clickLogger = new ClickLogger();
}
