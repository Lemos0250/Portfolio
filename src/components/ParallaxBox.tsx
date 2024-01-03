import Tilt from 'react-parallax-tilt';

interface ParallaxProps{
  glare?: boolean
  children: any
}

export function Parallax(props: ParallaxProps) {
    return (
      <Tilt
        perspective={800}
        glareEnable={props.glare}
        glareMaxOpacity={0.15}
        scale={1.02}
      >
        <div className="inner-element">
          {props.children}
        </div>
      </Tilt>
    );
  };