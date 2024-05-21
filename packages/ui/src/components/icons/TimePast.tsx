import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [TimePast, AnimatedTimePast] = createIcon({
  name: 'TimePast',
  getIcon: (props) => (
    <Svg fill="none" viewBox="0 0 16 16" {...props}>
      <Path
        d="M8,1.33a6.62,6.62,0,0,0-4.69,2V2a.66.66,0,0,0-.66-.67A.67.67,0,0,0,2,2V4.67a.67.67,0,0,0,.67.66H5.33A.67.67,0,1,0,5.33,4H4.51A5.32,5.32,0,1,1,8,13.33a5.26,5.26,0,0,1-4.76-3A.66.66,0,0,0,2.07,11,6.58,6.58,0,0,0,8,14.67,6.67,6.67,0,0,0,8,1.33Z"
        fill="currentColor"
      />
    </Svg>
  ),
})
