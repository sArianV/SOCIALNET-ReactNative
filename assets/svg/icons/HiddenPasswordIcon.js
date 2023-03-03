import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HiddenPasswordIcon = (props) => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.79 16.617c.24.189.279.505.093.773a.552.552 0 0 1-.773.093L.21.982A.55.55 0 0 1 .89.118l20.9 16.499Zm-.976-7.394c-.35.845-.973 1.96-1.853 3.06l-.863-.681C18.91 10.556 19.484 9.56 19.8 8.8c-.457-1.131-1.447-2.781-2.929-4.125C15.39 3.3 13.42 2.2 11 2.2a7.915 7.915 0 0 0-3.664.904l-.939-.74C7.7 1.61 9.24 1.07 11 1.07c2.777 0 5.001 1.297 6.62 2.802 1.61 1.491 2.685 3.248 3.194 4.506.113.272.113.574 0 .846ZM3.038 5.318l.864.68A14.54 14.54 0 0 0 2.169 8.77c.49 1.13 1.478 2.78 2.96 4.156C6.61 14.3 8.579 15.4 10.969 15.4c1.399 0 2.623-.35 3.695-.904l.939.739c-1.334.756-2.843 1.265-4.634 1.265-2.747 0-4.97-1.265-6.59-2.77-1.608-1.524-2.683-3.28-3.194-4.507a1.1 1.1 0 0 1 0-.846c.353-.845.974-1.96 1.853-3.06ZM6.57 8.769c0-.186.048-.395.076-.605l1.062.839c.103 1.729 1.509 3.097 3.262 3.097.223 0 .416-.017.598-.048l1.062.835a4.407 4.407 0 0 1-1.66.313c-2.4 0-4.4-1.97-4.4-4.431Zm8.83 0c0 .248-.016.457-.044.667l-1.062-.839a3.332 3.332 0 0 0-3.324-3.128c-.162 0-.354.048-.536.08L9.37 4.712c.505-.203 1.055-.344 1.598-.344 2.461 0 4.43 2 4.43 4.4Z"
      fill="gray"
    />
  </Svg>
)

export default HiddenPasswordIcon
