import React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from '../../component/svg';
const Shield = props => (
  <Svg viewBox="0 0 218 281" width="1em" height="1em" {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
        <Stop stopColor="gray" stopOpacity={0.25} offset="0%" />
        <Stop stopColor="gray" stopOpacity={0.12} offset="54%" />
        <Stop stopColor="gray" stopOpacity={0.1} offset="100%" />
      </LinearGradient>
    </Defs>
    <G fillRule="nonzero" fill="none">
      <Path
        d="M108.861.02L.156 66.916s0 137.98 108.705 213.229c108.705-75.249 108.705-213.23 108.705-213.23L108.86.02z"
        opacity={0.5}
        transform="translate(.327)"
        fill="url(#a)"
      />
      <Path
        d="M109.188 4.204l105.459 64.91s0 133.839-105.46 206.85C3.73 202.965 3.73 69.115 3.73 69.115l105.459-64.91zM134.23 129.15l-.003.038-.146.038a3.519 3.519 0 0 0-1.747-.336h-23.11l17.31-45.603-.232.29.232-.613-.746 1.255-35.776 44.67-.175.053s-.531.653-1.314 1.62a1128.054 1128.054 0 0 0-2.081 2.58 587.49 587.49 0 0 0-1.373 1.717c-1.187 1.492-2.26 2.86-2.739 3.53-.09.126-.16.228-.205.3-.27.435-.957.815-.957 2.656 0 .092.01.183.029.273.027.285.093.565.196.833.002.026.005.053.005.08v.015l.09.153-.06.016a3.685 3.685 0 0 0 3.286 2.323h23.11l-17.311 45.598.118-.147-.118.312.355-.607 36.294-45.156h.066c.082-.078.463-.544 1.016-1.235a217.733 217.733 0 0 0 1.09-1.375c2.121-2.69 5.13-6.58 5.589-7.322.217-.294.408-.606.572-.933a4.706 4.706 0 0 0 .37-1.987 3.766 3.766 0 0 0-1.635-3.036z"
        fill="#FFF"
      />
      <Path
        d="M108.015 168.861l19.147-23.823h.066c.082-.078.463-.544 1.016-1.235a217.733 217.733 0 0 0 1.09-1.375c2.121-2.69 5.13-6.58 5.589-7.322.217-.294.408-.606.572-.933a4.706 4.706 0 0 0 .37-1.987 3.766 3.766 0 0 0-1.635-3.036l-.003.038-.146.038a3.519 3.519 0 0 0-1.747-.336h-23.11l17.31-45.603-.232.29.232-.613-.746 1.255-17.773 22.192V5.311l1.802-1.107 105.46 64.91s0 133.839-105.46 206.85c-.606-.417-1.204-.844-1.802-1.266V168.861z"
        fill="#6C63FF"
        opacity={0.04}
      />
    </G>
  </Svg>
);

export default Shield;