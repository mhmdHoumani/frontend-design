import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import * as AiIcons from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MoreDetailsPopup = forwardRef((props, ref) => {
  const [moreProjectDetailsPopup, setMoreProjectDetailsPopup] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setMoreProjectDetailsPopup(false);
      }
    };
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keyup", close);

    return (_) => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keyup", close);
    };
  });
  useImperativeHandle(ref, () => {
    return {
      openTrigger: () => setMoreProjectDetailsPopup(true),
      closeTrigger: () => setMoreProjectDetailsPopup(false),
    };
  });
  return (
    <AnimatePresence>
      {moreProjectDetailsPopup && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
            },
          }}
          className="popup-container"
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.2,
              },
            }}
            className="popup-card project-popup-card"
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              }}
              exit={{
                y: 50,
                opacity: 0,
                transition: {
                  duration: 0.15,
                },
              }}
              className="popup-content"
            >
              <AiIcons.AiOutlineCloseCircle
                className="popup-close-icon"
                onClick={() => setMoreProjectDetailsPopup(false)}
              />
              {props.images.length > 1 ? (
                <Swiper
                  className="more-details-project-popup-container"
                  slidesPerView={1}
                  spaceBetween={30}
                  navigation={width > 1024}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                >
                  {props.images.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="more-details-images-container"
                    >
                      <img src={image} alt="" width="100%" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img src={props.images[0]} alt="" width="100%" />
              )}
              <h3 className="more-details-project-name">{props.name}</h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default MoreDetailsPopup;
