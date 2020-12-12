// typeof
namespace TypeGuards {
  type alphanumeric = string | number;

  function typeGuardExample(stringNumber: alphanumeric) {
    // Error: Property does not exist
    // const a = stringNumber.length;
    // const b = stringNumber.toFixed();

    // Type guard
    if (typeof stringNumber === "string") {
      // OK
      return stringNumber.length;
    } else {
      // OK
      return stringNumber.toFixed();
    }
  }
}

// instanceof
namespace TypeGuards {
  class Customer {
    isCreditAllowed(): boolean {
      // ...
      return true;
    }
  }

  class Supplier {
    isInShortList(): boolean {
      // ...
      return true;
    }
  }

  type BusinessPartner = Customer | Supplier;

  function signContract(partner: BusinessPartner): string {
    let message: string = "";
    if (partner instanceof Customer) {
      message = partner.isCreditAllowed()
        ? "Sign a new contract with the customer"
        : "Credit issue";
    }

    if (partner instanceof Supplier) {
      message = partner.isInShortList()
        ? "Sign a new contract the supplier"
        : "Need to evaluate further";
    }

    return message;
  }
}

// in
namespace TypeGuards {
  class Customer {
    isCreditAllowed(): boolean {
      // ...
      return true;
    }
  }

  class Supplier {
    isInShortList(): boolean {
      // ...
      return true;
    }
  }

  type BusinessPartner = Customer | Supplier;

  function signContract(partner: BusinessPartner): string {
    let message: string;
    if ("isCreditAllowed" in partner) {
      message = partner.isCreditAllowed()
        ? "Sign a new contract with the customer"
        : "Credit issue";
    } else {
      // must be Supplier
      message = partner.isInShortList()
        ? "Sign a new contract the supplier "
        : "Need to evaluate further";
    }
    return message;
  }
}

// custom type guard
namespace TypeGuards {
  class Customer {
    isCreditAllowed(): boolean {
      // ...
      return true;
    }
  }

  class Supplier {
    isInShortList(): boolean {
      // ...
      return true;
    }
  }

  type BusinessPartner = Customer | Supplier;

  function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
  }

  function signContract(partner: BusinessPartner): string {
    let message: string;
    if (isCustomer(partner)) {
      message = partner.isCreditAllowed()
        ? "Sign a new contract with the customer"
        : "Credit issue";
    } else {
      message = partner.isInShortList()
        ? "Sign a new contract with the supplier"
        : "Need to evaluate further";
    }

    return message;
  }
}
