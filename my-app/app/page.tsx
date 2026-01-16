export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <h1 className="text-7xl md:text-9xl font-bold tracking-tighter rainbow-text animate-rainbow">
        corvin.me
      </h1>

      <style jsx global>{`
        /* Rainbow text animation */
        .rainbow-text {
          background: linear-gradient(
            to right,
            #ff0000,
            #ff9900,
            #ffff00,
            #00ff00,
            #0099ff,
            #6633ff,
            #ff00ff
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          animation: rainbow 3s ease-in-out infinite alternate;
        }

        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Optional: Glow effect */
        .rainbow-text {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
                       0 0 40px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}