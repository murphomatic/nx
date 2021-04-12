import React from 'react';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="mt-12 text-gray-600 body-font">
      <div className="px-5 py-8 mx-auto flex items-center justify-between w-full max-w-screen-xl mx-auto space-x-10 items-center sm:flex-row flex-col">
        <div className="flex">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <a href="/" className="flex items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 262 163"
                className="mr-2"
              >
                <polygon
                  id="Path"
                  fill="#022f56"
                  points="130.68 104.59 97.49 52.71 97.44 96.3 40.24 0 0 0 0 162.57 39.79 162.57 39.92 66.39 96.53 158.26"
                />
                <polygon
                  id="Path"
                  fill="#022f56"
                  points="97.5 41.79 137.24 41.79 137.33 41.33 137.33 0 97.54 0 97.49 41.33"
                />
                <path
                  d="M198.66,86.86 C189.139872,86.6795216 180.538723,92.516445 177.19,101.43 C182.764789,93.0931021 193.379673,89.7432211 202.73,93.37 C207.05,95.13 212.73,97.97 217.23,96.45 C212.950306,90.4438814 206.034895,86.8725952 198.66,86.86 L198.66,86.86 Z"
                  id="Path"
                  fill="#96D8E9"
                />
                <path
                  d="M243.75,106.42 C243.75,101.55 241.1,100.42 235.6,98.42 C231.52,97 226.89,95.4 223.52,91 C222.86,90.13 222.25,89.15 221.6,88.11 C220.14382,85.4164099 218.169266,83.037429 215.79,81.11 C212.58,78.75 208.37,77.6 202.91,77.6 C191.954261,77.6076705 182.084192,84.2206169 177.91,94.35 C183.186964,87.0278244 191.956716,83.0605026 200.940147,83.9314609 C209.923578,84.8024193 217.767888,90.3805017 221.54,98.58 C223.424615,101.689762 227.141337,103.174819 230.65,102.22 C236.02,101.07 235.65,106.15 243.76,107.87 L243.75,106.42 Z"
                  id="Path"
                  fill="#48C4E5"
                />
                <path
                  d="M261.46,105.38 L261.46,105.27 C261.34,73.03 235.17,45.45 202.91,45.45 C183.207085,45.4363165 164.821777,55.3450614 154,71.81 L153.79,71.45 L137.23,45.45 L97.5,45.4499858 L135.25,104.57 L98.41,162.57 L137,162.57 L153.79,136.78 L170.88,162.57 L209.48,162.57 L174.48,107.49 C173.899005,106.416838 173.583536,105.220114 173.56,104 C173.557346,96.2203871 176.64661,88.7586448 182.147627,83.2576275 C187.648645,77.7566101 195.110387,74.6673462 202.89,74.67 C219.11,74.67 221.82,84.37 225.32,88.93 C232.23,97.93 246.03,93.99 246.03,105.73 L246.03,105.73 C246.071086,108.480945 247.576662,111.001004 249.979593,112.340896 C252.382524,113.680787 255.317747,113.636949 257.679593,112.225896 C260.041438,110.814842 261.471086,108.250945 261.43,105.5 L261.43,105.5 L261.43,105.38 L261.46,105.38 Z"
                  id="Path"
                  fill="#022f56"
                />
                <path
                  d="M261.5,113.68 C261.892278,116.421801 261.504116,119.218653 260.38,121.75 C258.18,126.84 254.51,125.14 254.51,125.14 C254.51,125.14 251.35,123.6 253.27,120.65 C255.4,117.36 259.61,117.74 261.5,113.68 Z"
                  id="Path"
                  fill="#022f56"
                />
              </svg>
            </a>
            <span className="ml-3 text-xl">Dev Tools</span>
          </div>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2021 - Created with
            <svg
              className="mx-1 h-4 w-4 inline align-baseline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{' '}
            by
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="inline-block align-bottom ml-1 h-6 w-12 text-blue-500"
                fill="currentcolor"
                viewBox="0 0 402.32 125.56"
              >
                <g>
                  <polygon points="123.57 110.54 123.57 125.56 146.66 125.56 146.66 112.72 123.57 110.54" />
                  <path d="M95,102.39l-.14,0c-.08-1.78-1.64-3-2.23-3.76a2.31,2.31,0,0,1-.54-1.18h0A27.52,27.52,0,0,0,67,72h0A8.38,8.38,0,0,0,64,68.75a8.43,8.43,0,0,1-3.19-6.63v0a9.41,9.41,0,0,0-8.34,7.36,23.35,23.35,0,0,1-6.32-37.28,30.16,30.16,0,0,1,22-9.42A30.55,30.55,0,0,1,97.73,45.42a15.3,15.3,0,0,1-9.11,5.36A15.15,15.15,0,0,0,76.28,63.32c5.88,0,9.79,8,20.71,8a9.91,9.91,0,0,0,9.18-6.16,9.93,9.93,0,0,0,9.19,6.16,19.61,19.61,0,0,0,8.56-1.9V50.82l-.19,0C119,50,114.27,46.52,112.67,42h0a57.41,57.41,0,1,0-91.78,59.89,11.81,11.81,0,0,1-3.46-1.25,11.4,11.4,0,0,0-6.55-1.5A11.67,11.67,0,0,0,.78,115a33.3,33.3,0,0,1,9.48-2,33.79,33.79,0,0,1,5.7.1h0a29.56,29.56,0,0,0,4.71.07q1.24-.09,2.46-.27a28.79,28.79,0,0,0,9.82-3.4,54.59,54.59,0,0,0,7.35,2.8A74.29,74.29,0,0,0,90.38,109a8.94,8.94,0,0,0,2-1.25,2.94,2.94,0,0,0,1.24.49L165.42,115ZM29.54,47.26c.11-1.54,1.07-2.72,2.14-2.65s1.86,1.39,1.75,2.93-1.07,2.72-2.15,2.65S29.43,48.8,29.54,47.26ZM30,69.66c1.09-.89,3-.36,4.3,1.2s1.44,3.55.35,4.45-3,.36-4.3-1.2S28.94,70.56,30,69.66Zm-5.33-20c.54,0,1,.59,1,1.36s-.38,1.41-.92,1.43-1-.58-1-1.35S24.17,49.66,24.7,49.63Zm-.78,8.86c1-.24,2.18.78,2.53,2.28s-.22,2.92-1.27,3.16-2.18-.77-2.53-2.28S22.87,58.74,23.92,58.49Zm40.78,41.7a2.87,2.87,0,0,1-5.57-1.35c.35-1.46,1.52-.84,3.06-.46S65.05,98.74,64.7,100.19Z" />
                  <polygon points="179.75 43.56 179.75 87.26 142.97 43.56 123.57 43.56 123.57 103.1 146.66 108.56 146.66 81.87 183.44 125.56 202.84 125.56 202.84 43.56 179.75 43.56" />
                  <path d="M244.47,63.19A34.5,34.5,0,0,1,257.15,61v20A48.15,48.15,0,0,0,252,80.7q-7.26,0-11.37,3.86T236.55,96.4v29.16H213.94V62.07h21.54v7.62A21,21,0,0,1,244.47,63.19Z" />
                  <path d="M362.16,62.07l-18.35,63.49h-21.9l-7.53-29.1-8,29.1H284.48L266.13,62.07h21.43l8.59,32.06,9.07-32.06H324.5l8.71,32.41,9.07-32.41Z" />
                  <path d="M393.28,28.64H370.61v74c0,19.88,12.84,22.41,24.89,22.41,3.67,0,6.82-.35,6.82-.35V107.44s-1.31.12-2.75.12c-5.11,0-6.29-2-6.29-7.59Z" />
                </g>
              </svg>
            </a>
          </p>
        </div>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500">
            <span className="sr-only">Nx on Twitter</span>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              role="img"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <span className="sr-only">Nx Slack Community</span>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              role="img"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <span className="sr-only">Nx on Github</span>
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              role="img"
              className="w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;