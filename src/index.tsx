import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
  ref: RefObject<any>,
  handleOutsideClick: () => void
) => {
  useEffect(
    () => {
      function handleOutsideClickWrapper(event: MouseEvent): void {
        if (ref.current && !ref.current.contains(event.target)) {
          handleOutsideClick();
        }
      }
      document.addEventListener('mousedown', handleOutsideClickWrapper);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClickWrapper);
      };
    },
    [ ref, handleOutsideClick ]
  );
};
