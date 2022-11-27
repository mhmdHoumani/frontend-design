import React, { forwardRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as AiIcons from "react-icons/ai";

const ModalPopup = forwardRef((props, ref) => {
  const [triggerPopup, setTriggerPopup] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openTrigger: () => setTriggerPopup(true),
      closeTrigger: () => setTriggerPopup(false),
    };
  });
  return (
    <AnimatePresence>
      {triggerPopup && (
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
              delay: 0.3,
            },
          }}
          className="modal-popup-container"
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
                delay: 0.3,
              },
            }}
            className="modal-popup-card"
          >
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
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
              className="modal-popup-content"
            >
              <AiIcons.AiOutlineCloseCircle
                className="popup-close-icon"
                onClick={() => setTriggerPopup(false)}
              />
              <div className="modal-popup-data">{props.children}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ModalPopup;
