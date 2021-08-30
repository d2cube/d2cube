import {CircleLayout as ReactCircleLayout, Radian} from 'react-circle-layout';

const CircleLayout = ({children, radius, startRadian = -0.5 * Math.PI}) => (
  <ReactCircleLayout radius={radius}>
    {children.map((child, i) => {
      const radian = startRadian + (i / children.length) * 2 * Math.PI;
      return (
        <Radian key={radian} radian={radian}>
          {child}
        </Radian>
      );
    })}
  </ReactCircleLayout>
);

export default CircleLayout;
