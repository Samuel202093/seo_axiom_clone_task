import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { LuSettings2 } from 'react-icons/lu';
import { TbArrowsMaximize } from 'react-icons/tb';

const StickySidebar = () => {
  return (
    <div className="sticky-sidebar">
      <div className="sticky-icons">
        <a href="#" className="sticky-icon">
          <BsCart3 />
        </a>
        <a href="#" className="sticky-icon">
          <LuSettings2 />
        </a>
        <a href="#" className="sticky-icon">
          <TbArrowsMaximize />
        </a>
      </div>
    </div>
  );
};

export default StickySidebar;