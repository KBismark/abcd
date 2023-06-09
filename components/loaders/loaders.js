import { useEffect, useState } from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { Dimensions } from "react-native"


const privateState = {

}
const DimensionsListener = Dimensions.addEventListener('change', (window, screen) => {
  for (let i in privateState) {
    privateState[i](window.width);
  }
})
export const TitleLoader = (props = {}) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [viewBox, setViewBox] = useState(`0 0 ${windowWidth} 40`);
  privateState.title = setWindowWidth;
  useEffect(() => {
    return () => {
      privateState.title = undefined;
      delete privateState.title;
    }
  })
  // privateState.title = (wimdow) => {
  //   setWindowWidth(window.width);
  //   //setViewBox
  // };
  return (
    <ContentLoader
      speed={1}
      width={windowWidth}
      height={40}
      viewBox={viewBox}
      backgroundColor="#f7f7f7"
      foregroundColor="#ecebeb"//"#ecebeb"
      {...props}
    >
      <Rect x="15" y="0" rx="7" ry="7" width={windowWidth-(windowWidth*0.4)} height="18" />
    </ContentLoader>
  )
}

export const BlogCardLoader = (props = {}) => {
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  const [viewBox, setViewBox] = useState(`0 0 ${windowWidth} 400`);
  privateState.blogCard = setWindowWidth;
  useEffect(() => {
    return () => {
      privateState.blogCard = undefined;
      delete privateState.blogCard;
    }
  })
    return (
    <ContentLoader 
      speed={1}
      width={windowWidth}
      height={400}
      viewBox={viewBox}
      backgroundColor="#f7f7f7"
      foregroundColor="#dcdbdb"//"#ecebeb"
      {...props}
    >
      <Rect x="15" y="0" rx="10" ry="10" width={windowWidth-30} height="200" /> 
      <Circle cx="30" cy="230" r="17" /> 
      <Rect x="55" y="226" rx="0" ry="0" width="136" height="11" /> 
      <Rect x="30" y="260" rx="0" ry="0" width={windowWidth-60} height="11" /> 
      <Rect x="30" y="280" rx="0" ry="0" width={windowWidth-60} height="8" /> 
      <Rect x="30" y="300" rx="0" ry="0" width={windowWidth-60} height="8" />
    </ContentLoader>
  )}