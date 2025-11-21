// This file is a workaround for a Node.js 23+ issue where accessing localStorage
// without a specific flag throws a SecurityError.
// We mock localStorage on the server to prevent crashes.

if (typeof global !== 'undefined') {
  try {
    // Attempt to access localStorage. If it throws, we need to mock it.
    // We access it in a way that might trigger the error if it's the broken implementation.
    const _ = global.localStorage;
  } catch (e: any) {
    if (e?.message?.includes('local storage') || e?.code === 18 || e?.name === 'SecurityError') {
      Object.defineProperty(global, 'localStorage', {
        value: {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
          clear: () => {},
          length: 0,
          key: () => null,
        },
        writable: true,
        configurable: true,
      });
    }
  }
}
