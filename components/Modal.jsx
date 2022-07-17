import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets/assets';

const Modal = () => {
  const modalRef = useRef(null);
  const { theme } = useTheme();
  return (
    <div className="flexCenter fixed inset-0 z-10 bg-overlay-black animated fadeIn">
      <div ref={modalRef} className="w-2/5 md:w-11/12 minlg:w-2/4 dark:bg-nft-dark bg-white flex flex-col rounded-lg">
        test
      </div>
    </div>
  );
};
export default Modal;
