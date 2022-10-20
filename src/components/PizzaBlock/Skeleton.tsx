import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={305}
    height={495}
    viewBox="0 0 285 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="125" cy="130" r="117" /> 
    <rect x="2" y="308" rx="10" ry="10" width="255" height="76" /> 
    <rect x="0" y="411" rx="10" ry="10" width="100" height="40" /> 
    <rect x="0" y="266" rx="7" ry="7" width="255" height="22" /> 
    <rect x="126" y="408" rx="25" ry="25" width="130" height="47" />
  </ContentLoader>
)

export default Skeleton