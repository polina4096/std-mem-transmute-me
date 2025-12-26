import { createSignal, For, onMount } from "solid-js";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function ChristmasSnow() {
  const [snowflakes, setSnowflakes] = createSignal<Snowflake[]>([]);

  onMount(() => {
    const flakes: Snowflake[] = [];
    const numFlakes = 50;

    for (let i = 0; i < numFlakes; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }

    setSnowflakes(flakes);
  });

  return (
    <div class="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <For each={snowflakes()}>
        {flake => (
          <div
            class="animate-snowfall absolute -top-2"
            style={{
              "left": `${flake.left}%`,
              "width": `${flake.size}px`,
              "height": `${flake.size}px`,
              "animation-duration": `${flake.duration}s`,
              "animation-delay": `${flake.delay}s`,
              "opacity": flake.opacity,
            }}
          >
            <div class="h-full w-full rounded-full bg-white shadow-sm" />
          </div>
        )}
      </For>
      <style>
        {`
        @keyframes snowfall {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
          }
        }

        .animate-snowfall {
          animation-name: snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}
      </style>
    </div>
  );
}
