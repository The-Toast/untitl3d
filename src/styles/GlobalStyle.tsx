'use client'

import {Global, css} from '@emotion/react'

export function GlobalStyle() {
  return (
    <Global styles={css`
      @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
        
      body,
      
      * {
        font-family:
                Pretendard,
                -apple-system,
                system-ui,
                sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: background-color 0.3s;
      }
      
      button {
        border: none;
        background: initial;
      }
      
      input {
        width: 100%;
        outline: none;
        border: none;
      }
      
      a {
        color: initial;
        text-decoration: none;
      }
      
      h1 {
        font-size: 16px;
        font-weight: 400;
      }
    `}
    />
  )
}