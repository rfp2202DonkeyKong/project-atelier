import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OverviewContext } from '../../Overview.jsx';

const Image = (props) => {

  const { slide } = props;

  const { setShowModal } = useContext(OverviewContext);

  const handleClick = () => {
    document.body.classList.add('modal-open');
    setShowModal(true);
  }

  return (
    <li>
      <img src={slide.url} key={slide.image} className="image" onClick={() => handleClick()}/>
    </li>
  )
}

Image.propTypes = {
  slide: PropTypes.object.isRequired
}

export default Image;