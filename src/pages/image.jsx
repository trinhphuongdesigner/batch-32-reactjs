import ButtonGroup from 'components/buttonGroup/button';
import React, { useState } from 'react';

const imageList = [
  "https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1685514473556-c983a5971d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1686481394225-dba348a3ee0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
  "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
  "https://images.unsplash.com/photo-1686556029158-90f2cc511c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1686958633466-2a5e0579d2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80",
  "https://images.unsplash.com/photo-1686900248731-5a492eb9a5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
  "https://plus.unsplash.com/premium_photo-1675756583711-ce312872227b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
]

function ImagePage(props) {
  const [state, setState] = useState({
    index: 0,
  });

  const onNextImage = () => {
    if (state.index + 1  < imageList.length) {
      setState((prev) => ({
        ...prev,
        index: prev.index + 1,
      }))
    } else {
      setState((prev) => ({
        ...prev,
        index: 0,
      }))
    }
  }

  const onPreviousImage = () => {
    if (state.index - 1  >= 0) {
      setState((prev) => ({
        ...prev,
        index: prev.index - 1,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        index: imageList.length - 1,
      }))
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        style={{
          width: '600px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
        src={imageList[state.index]}
        alt="anh xem cho vui"
      />

      <h5>{state.index + 1}/{imageList.length}</h5>

      <div style={{
        display: 'flex'
      }}>
        <ButtonGroup
          style={{
            marginRight: "20px"
          }}
          icon={<i className="fa-solid fa-chevron-left fa-xl" />}
          title="Previous"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onPreviousImage}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Next"
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onNextImage}
        />
      </div>
    </div>
  );
}

export default ImagePage;