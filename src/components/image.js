import React from "react"
import imageStyles from "./image.module.css"
export default ({ children }) => (
  <div className={imageStyles.container}>{children}</div>
)

