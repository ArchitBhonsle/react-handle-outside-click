# react-handle-outside-click

A react hook to handle clicks **outside** an element.

## Usage

1. Attach a ref to the element outside which you want to watch clicks.
2. Call the hook. Pass the ref as the first argument and the handler as the second.
3. ???
4. PROFIT

If the handler is a simple `() => {}` and *if needed* wrap it a `useCallback`

### JavaScript

```jsx
import { useOutsideClick } from 'react-handle-outside-click';

const App = () => {
  const ref = React.useRef()

  const handleOutsideClick = () => {
    console.log("hello")
  }

  useOutsideClick(ref, handleOutsideClick);

  return (
    <div ref={ref}>
      Hello World
    </div>
  );
};
```


### TypeScript

```tsx
import { useOutsideClick } from 'react-handle-outside-click';

const App = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  const handleOutsideClick = () => {
    console.log("hello")
  }

  useOutsideClick(ref, handleOutsideClick);

  return (
    <div ref={ref}>
      Hello World
    </div>
  );
};
```