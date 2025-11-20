# @juanantonioz/anton-ui

A simple and modern React component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install @juanantonioz/anton-ui
```

## Usage

Import the CSS file in your root component (e.g., `App.tsx` or `main.tsx`):

```tsx
import '@juanantonioz/anton-ui/style.css';
```

Then import and use the components:

```tsx
import { Button, Title } from '@juanantonioz/anton-ui';

function App() {
  return (
    <div>
      <Title>Hello World</Title>
      <Button onClick={() => console.log('Clicked!')}>
        Click me
      </Button>
    </div>
  );
}
```

## Features

- 🚀 Built with Vite and TypeScript
- 🎨 Styled with Tailwind CSS
- 📦 Tree-shakeable
- 📝 Fully typed

## License

MIT
