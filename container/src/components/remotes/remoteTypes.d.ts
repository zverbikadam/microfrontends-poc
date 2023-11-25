// This tells TypeScript that the 'smarthome/SmartHomeApp' module exports a 'mount' function.
declare module "smarthome/SmartHomeApp" {
  export function mount(
    htmlElement: HTMLElement,
    callbacks: {
      onNavigate: (pathname: string) => void;
    }
  ): {
    onParentNavigate: (pathname: string) => void;
  };
}

declare module "welcomePage/WelcomePageApp" {
  export function mount(htmlElement: HTMLElement): void;
}

declare module "todo/TodoApp" {
  export function mount(htmlElement: HTMLElement): void;
}
