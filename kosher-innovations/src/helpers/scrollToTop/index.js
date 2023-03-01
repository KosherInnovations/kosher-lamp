
const scrollToTop = () => {
  return new Promise((resolve) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const scrollCheck = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollCheck);
        resolve();
      }
    }, 50);
  });
};

export default scrollToTop;