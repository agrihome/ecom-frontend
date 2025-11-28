import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'category-toggle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};

