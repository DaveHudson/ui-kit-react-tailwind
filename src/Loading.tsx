import React from 'react';

export function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="60px"
        height="60px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          ng-attr-r="{{config.radius}}"
          ng-attr-stroke-width="{{config.width}}"
          ng-attr-stroke="{{config.stroke}}"
          ng-attr-stroke-dasharray="{{config.dasharray}}"
          fill="none"
          strokeLinecap="round"
          r="40"
          strokeWidth="4"
          stroke="#333"
          strokeDasharray="62.83185307179586 62.83185307179586"
          transform="rotate(60 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}
