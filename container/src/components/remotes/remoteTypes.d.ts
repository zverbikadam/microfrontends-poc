// This tells TypeScript that the 'smarthome/SmartHomeApp' module exports a 'mount' function.
declare module 'smarthome/SmartHomeApp' {
  export function mount(htmlElement: HTMLElement | null): void;
}

declare module 'welcomePage/WelcomePageApp' {
  export function mount(htmlElement: HTMLElement | null): void;
}

declare module 'shoppingList/ShoppingListApp' {
  export function mount(htmlElement: HTMLElement | null): void;
}