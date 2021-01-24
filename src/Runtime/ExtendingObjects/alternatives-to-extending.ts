let div = document.createElement("div");
div.setAttribute('id', 'example');
div.classList.add("fancyStyle");
document.body.append(div);

// may fail in old browsers
namespace AlternativesToExtending {
  const elem = document.getElementById("example");
  console.log(elem.classList);
}

// one common solution to the potential absence of some feature 
// is to use a polyfill.
namespace AlternativesToExtending {
  // ClasList Polyfill
  if (
    typeof document !== "undefined" &&
    !("classList" in document.documentElement)
  ) {
    const elementPrototype = (HTMLElement || Element).prototype;
    if (elementPrototype) {
      Object.defineProperty(elementPrototype, "classList", {
        get: function () {
          const list = this.className ? this.className.split(/\s+/) : [];
          console.log("Polyfill: " + list);
        },
      });
    }
  }
  const elem = document.getElementById("example");
  console.log(elem.classList);
}

// façade option: it won’t ever clash with native or library code
namespace AlternativesToExtending {
  class Elements {
    static getClassList(elem: HTMLElement) {
      if ("classList" in elem) {
        return elem.classList;
      }
      //@ts-ignore
      return elem.className ? elem.className.split(/\s+/) : [];
    }
  }

  const elem = document.getElementById("example");
  console.log(Elements.getClassList(elem));
}
