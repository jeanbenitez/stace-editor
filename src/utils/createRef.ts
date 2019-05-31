
export function createRef<T = HTMLElement>() {
  const _fn: { (elm: T): void; current?: T } = (current: T) => {
      _fn.current = current;
  };
  return _fn;
}
