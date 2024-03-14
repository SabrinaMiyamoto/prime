import { animateScroll as scroll } from 'react-scroll';


const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 1000,
    });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </div>
  );
};

export default ScrollToTopButton;
