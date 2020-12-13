/* 
The DIP simply states that high-level modules shouldn’t depend on low-level 
components, but instead depend on abstractions. In turn, the abstractions 
should not depend on details, but on yet more abstractions. 
In simple terms, you can satisfy the DIP by depending on an interface, 
rather than a class.
*/

namespace DependencyInversionPrincipleBad {
  class Light {
    switchOn() {
      //...
    }
    switchOff() {
      //...
    }
  }

  class LightSwitch {
    private isOn = false;
    constructor(private light: Light) {}
    onPress() {
      if (this.isOn) {
        this.light.switchOff();
        this.isOn = false;
      } else {
        this.light.switchOn();
        this.isOn = true;
      }
    }
  }
}

namespace DependencyInversionPrincipleGood {
  interface LightSource {
    switchOn(): void;
    switchOff(): void;
  }

  class Light implements LightSource {
    switchOn() {
      //...
    }
    switchOff() {
      //...
    }
  }
  class LightSwitch {
    private isOn = false;
    constructor(private light: LightSource) {}
    onPress() {
      if (this.isOn) {
        this.light.switchOff();
        this.isOn = false;
      } else {
        this.light.switchOn();
        this.isOn = true;
      }
    }
  }
}
