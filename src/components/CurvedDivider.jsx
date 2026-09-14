import React from 'react';

export default function CurvedDivider({
  fill = '#fcf9f4',
  position = 'bottom', // 'bottom' or 'top'
  withLeaves = true,
  className = ''
}) {
  const isBottom = position === 'bottom';

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none ${
        isBottom ? 'bottom-0' : 'top-0'
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-20 sm:h-28 md:h-36 lg:h-44 block ${
          isBottom ? '-mb-1' : '-mt-1'
        }`}
      >
        {/* Subtle golden & tea green organic contour lines */}
        <path
          d={
            isBottom
              ? 'M0,52 C320,125 640,135 940,75 C1180,25 1340,58 1440,88'
              : 'M0,52 C320,125 640,135 940,75 C1180,25 1340,58 1440,88'
          }
          stroke="#D49B35"
          strokeWidth="2.5"
          strokeOpacity="0.55"
          fill="none"
        />
        <path
          d={
            isBottom
              ? 'M0,55 C320,128 640,138 940,78 C1180,28 1340,61 1440,91'
              : 'M0,55 C320,128 640,138 940,78 C1180,28 1340,61 1440,91'
          }
          stroke="#3F6653"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Main organic curve */}
        <path
          d={
            isBottom
              ? 'M0,52 C320,125 640,135 940,75 C1180,25 1340,58 1440,88 L1440,140 L0,140 Z'
              : 'M0,0 L1440,0 L1440,88 C1340,58 1180,25 940,75 C640,135 320,125 0,52 Z'
          }
          fill={fill}
        />
      </svg>

      {/* Floating artisanal tea leaves accents across boundary */}
      {withLeaves && (
        <>
          <div
            className={`absolute left-[10%] animate-float-leaf opacity-95 filter drop-shadow-md pointer-events-auto ${
              isBottom ? 'bottom-[42%] md:bottom-[52%]' : 'top-[35%] md:top-[45%]'
            }`}
          >
            <svg
              className="w-8 h-8 md:w-11 md:h-11 transform -rotate-12 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 36C12 36 14 20 28 12C42 4 44 8 44 8C44 8 44 24 30 32C16 40 12 36 12 36Z"
                fill="#2D5A43"
              />
              <path
                d="M12 36C22 28 32 18 44 8"
                stroke="#86AF99"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            className={`absolute right-[14%] animate-float-leaf-reverse opacity-90 filter drop-shadow-md pointer-events-auto ${
              isBottom ? 'bottom-[30%] md:bottom-[40%]' : 'top-[22%] md:top-[32%]'
            }`}
          >
            <svg
              className="w-6 h-6 md:w-9 md:h-9 transform rotate-45 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 36C12 36 14 20 28 12C42 4 44 8 44 8C44 8 44 24 30 32C16 40 12 36 12 36Z"
                fill="#3F6653"
              />
              <path
                d="M12 36C22 28 32 18 44 8"
                stroke="#A5D0B9"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            className={`hidden sm:block absolute left-[56%] animate-float-leaf opacity-80 filter drop-shadow-sm pointer-events-auto ${
              isBottom ? 'bottom-[18%] md:bottom-[26%]' : 'top-[12%] md:top-[18%]'
            }`}
          >
            <svg
              className="w-5 h-5 md:w-7 md:h-7 transform -rotate-45 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 36C12 36 14 20 28 12C42 4 44 8 44 8C44 8 44 24 30 32C16 40 12 36 12 36Z"
                fill="#1B4332"
              />
              <path
                d="M12 36C22 28 32 18 44 8"
                stroke="#CBEAD1"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
