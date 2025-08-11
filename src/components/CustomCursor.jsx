// src/components/CustomCursor.jsx
import { useEffect, useRef } from 'react';
import styles from '../css/CustomCursor.module.css';

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // 마우스 위치 추적
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // 부드러운 애니메이션 함수
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.4;
      cursorY += (mouseY - cursorY) * 0.4;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animateCursor);
    }

    // 파도 효과 생성 함수
    function createRippleWave(x, y) {
      const ripple = document.createElement('div');
      ripple.className = styles.cursorRipple;
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '20px';
      ripple.style.height = '20px';

      document.body.appendChild(ripple);

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 600);
    }

    // 마우스 다운 이벤트
    const handleMouseDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    };

    // 마우스 업 이벤트
    const handleMouseUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // 마우스 떠날 때
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    // 마우스 들어올 때
    const handleMouseEnter = (e) => {
      cursor.style.opacity = '1';
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    // 클릭할 때 파도 효과
    const handleClick = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      createRippleWave(e.clientX, e.clientY);
    };

    // 이벤트 리스너 추가
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('click', handleClick);

    // 애니메이션 시작
    animateCursor();

    // 클린업
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div ref={cursorRef} className={styles.customCursor} />;
}

export default CustomCursor;