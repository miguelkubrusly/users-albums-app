const usePause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
export { usePause };
