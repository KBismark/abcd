import { useState } from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { Dimensions } from "react-native"

export const TitleLoader = (props={}) => (
  <ContentLoader 
    speed={1}
    width={400}
    height={30}
    viewBox="0 0 400 30"
    backgroundColor="#d3ecf4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="15" y="15" rx="5" ry="5" width="220" height="15" />
  </ContentLoader>
)

export const BlogCardLoader = (props = {}) => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    let viewBox = `0 0 ${windowWidth} 400`;
    return (
    <ContentLoader 
      speed={1}
      width={windowWidth}
      height={400}
      viewBox={viewBox}
      backgroundColor="#d3ecf4"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="15" y="0" rx="0" ry="0" width={windowWidth-30} height="200" /> 
      <Circle cx="30" cy="230" r="17" /> 
      <Rect x="55" y="226" rx="0" ry="0" width="136" height="11" /> 
      <Rect x="30" y="260" rx="0" ry="0" width={windowWidth-60} height="11" /> 
      <Rect x="30" y="280" rx="0" ry="0" width={windowWidth-60} height="8" /> 
      <Rect x="30" y="300" rx="0" ry="0" width={windowWidth-60} height="8" />
    </ContentLoader>
  )}