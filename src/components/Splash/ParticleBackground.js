import Particles from "react-particles-js";

const ParticleBackground = () => {
  return (
    <>
      <Particles
        canvasClassName="particles"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 1.8,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              direction: "top",
              out_mode: "out",
              speed: 0.1,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              push: {
                particles_nb: 1,
              },
            },
          },
        }}
      />
    </>
  );
};

export default ParticleBackground;
