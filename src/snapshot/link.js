import React, {useState} from 'react';
import styled from 'styled-components';

const A = styled.a`
  background: red;
`; // style이 변경되면 link.test.js.snap도 변경

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default function Link({page, children}) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  }; // fuction이 변경되어도 link.test.js.snap에는 영향 X

  return (
    <A
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </A>
  );
}