import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BellIcon = (props) => (
  <Svg
    width={20}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.524.688c0-.38.348-.688.687-.688.417 0 .726.308.726.688v.721a6.873 6.873 0 0 1 6.188 6.841V9.5c0 1.878.748 3.678 2.075 5.01l.116.117c.357.356.559.803.559 1.345 0 1.052-.85 1.903-1.904 1.903H2.528c-1.05 0-1.903-.85-1.903-1.903 0-.542.2-.989.557-1.345l.118-.117A7.095 7.095 0 0 0 3.375 9.5V8.25a6.873 6.873 0 0 1 6.188-6.841l-.04-.722Zm.687 2.062c-2.999 0-5.5 2.462-5.5 5.5V9.5c0 2.243-.852 4.396-2.438 5.982l-.118.116c-.1.098-.194.236-.194.373 0 .293.275.529.567.529H17.97a.528.528 0 0 0 .374-.902l-.116-.116A8.445 8.445 0 0 1 15.75 9.5V8.25c0-3.038-2.462-5.5-5.539-5.5Zm0 17.875c.636 0 1.148-.382 1.337-.915.124-.361.52-.585.876-.421.357.129.546.52.421.876A2.764 2.764 0 0 1 10.211 22c-1.16 0-2.178-.765-2.556-1.835a.692.692 0 0 1 .42-.876c.357-.164.753.06.877.42.19.534.7.916 1.26.916Z"
      fill="gray"
    />
  </Svg>
);

export default BellIcon;