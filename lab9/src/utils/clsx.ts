type ClassValue = string | number | null | undefined | boolean | ClassValue[] | Record<string, unknown>;

export function clsx(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = clsx(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === 'object') {
      for (const key in arg as object) {
        if ((arg as Record<string, unknown>)[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

export default clsx;
