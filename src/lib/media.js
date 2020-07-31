import { css } from "styled-components"

const sizes = {
  desktop: 2000,
  laptop: 1500,
  smLaptop: 1000,
  tablet: 700,
  mobile: 425,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
