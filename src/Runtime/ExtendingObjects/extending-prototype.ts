namespace ExtendingPrototype1 {
  const x = document.createElement("P");
  const t = document.createTextNode("This is a paragraph.");
  x.appendChild(t);
  document.body.appendChild(x);

  // The extension is added to the NodeList.prototype, which means it will be
  // available on all NodeList instances.
  if (!NodeList.prototype.each) {
    NodeList.prototype.each = function (callback: (elem: HTMLElement) => any) {
      for (let node of this) {
        callback.call(node, node);
      }
    };
  }

  const getParagraphText = function (elem: HTMLParagraphElement) {
    console.log(elem.innerHTML);
  };
  const paragraphs = document.querySelectorAll("p");
  paragraphs.each(getParagraphText);
}

namespace ExtendingPrototype2 {
  String.prototype.logPrint = function (decorator?: string): string {
    return `${decorator} ${this}`;
  };

  console.log("hello".logPrint("[-]"));
}
