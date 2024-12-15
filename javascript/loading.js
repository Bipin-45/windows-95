// canvas
const canvas = document.getElementById("stars");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      function createStars() {
        const stars = [];
        for (let i = 0; i < 100; i++) {
          stars.push({
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            radius: random(0.5, 2),
            alpha: random(0.1, 1),
            flicker: random(0.01, 0.05),
          });
        }
        return stars;
      }

      function drawStars(stars) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
          star.alpha += star.flicker;
          if (star.alpha <= 0 || star.alpha >= 1) {
            star.flicker = -star.flicker;
          }
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
          ctx.fill();
        });
      }

      const stars = createStars();

      function animate() {
        drawStars(stars);
        requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStars(stars);
      });

      setTimeout(() => {
        canvas.style.display = "none";
        document.querySelector(".main").style.display = "block";
      }, 2500);

      // loading-screen

      const blocks = document.querySelectorAll(".block");
      const gifLoading = document.getElementById("gif-loading");

      const colors = [
        "#FF00FF",
        "#520AFF",
        "#FFFF00",
        "#FF0000",
        "#00FF00",
        "#800080",
        "#008080",
        "#808000",
      ];

      blocks.forEach((block, index) => {
        block.style.animationDelay = `${index * 0.2}s`;
        block.style.backgroundColor = colors[index % colors.length];
      });

      const style = document.createElement("style");
      style.innerHTML = `
      @keyframes loading {
        0%, 100% {
      transform: translateY(0);
        }
        50% {
      transform: translateY(-20px);
        }
      }
      `;
      document.head.appendChild(style);

      setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
      }, 2500);

      // turn loading screen off
      

window.onload = function() {
  
  setTimeout(function() {
      
      document.getElementById('load').style.display = 'none';
      // Show main content
      document.getElementById('mainContent').style.display = 'block';
  }, 2500); 
};
