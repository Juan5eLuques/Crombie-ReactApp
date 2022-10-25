import * as React from "react"
import { SVGProps } from "react"

export const EditButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg"
   width={18}
   height={18}
   viewBox= "0 0 48 48"
   {...props}>
    <path
      fill="#E57373"
      d="m42.583 9.067-3.651-3.65a1.426 1.426 0 0 0-2.015 0l-1.718 1.72 5.664 5.664 1.72-1.718a1.427 1.427 0 0 0 0-2.016"
    />
    <path
      fill="#FF9800"
      d="m38.032 15.632-25.46 25.46-5.665-5.664 25.46-25.46z"
    />
    <path
      fill="#B0BEC5"
      d="m32.363 9.968 2.831-2.834 5.668 5.664-2.831 2.834z"
    />
    <path fill="#FFC107" d="M6.905 35.43 5 43l7.571-1.906z" />
    <path fill="#37474F" d="M5.965 39.172 5 43l3.827-.965z" />
  </svg>
)

