interface NodeList {
    each(callback: (element: HTMLElement) => any): void;
  }
  interface NodeListOf<TNode extends Node> {
    each(callback: (element: TNode) => any): void;
  }

interface String {
  logPrint(decorator?: string): string;
}
