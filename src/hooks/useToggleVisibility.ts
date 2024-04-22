import { useState, useEffect, useRef } from 'react';

const useToggleVisibility = (initialVisibility: boolean = false): [boolean, () => void, React.RefObject<HTMLDivElement>] => {
  const [isVisible, setIsVisible] = useState<boolean>(initialVisibility);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(prevVisible => !prevVisible);
  };

  return [isVisible, toggleVisibility, ref];
};

export default useToggleVisibility;
