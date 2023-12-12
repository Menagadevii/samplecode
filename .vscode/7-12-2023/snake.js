const board = document.getElementById('game-board');
    const gridSize = 20;
    const boardSize = 20;
    const snake = [{ x: 10, y: 10 }];
    let direction = 'right';
    let food = generateFood();

    function generateFood() {
      const x = Math.floor(Math.random() * boardSize);
      const y = Math.floor(Math.random() * boardSize);
      return { x, y };
    }

    function update() {
      const head = { ...snake[0] };

      switch (direction) {
        case 'up':
          head.y -= 1;
          break;
        case 'down':
          head.y += 1;
          break;
        case 'left':
          head.x -= 1;
          break;
        case 'right':
          head.x += 1;
          break;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        food = generateFood();
      } else {
        snake.pop();
      }

      if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
        clearInterval(game);
        alert('Game Over!');
        return;
      }

      render();
    }

    function render() {
      board.innerHTML = '';

      snake.forEach(part => {
        const element = document.createElement('div');
        element.classList.add('snake-part');
        element.style.left = part.x * gridSize + 'px';
        element.style.top = part.y * gridSize + 'px';
        board.appendChild(element);
      });

      const foodElement = document.createElement('div');
      foodElement.classList.add('food');
      foodElement.style.left = food.x * gridSize + 'px';
      foodElement.style.top = food.y * gridSize + 'px';
      board.appendChild(foodElement);
    }

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'down') direction = 'up';
          break;
        case 'ArrowDown':
          if (direction !== 'up') direction = 'down';
          break;
        case 'ArrowLeft':
          if (direction !== 'right') direction = 'left';
          break;
        case 'ArrowRight':
          if (direction !== 'left') direction = 'right';
          break;
      }
    });

    const game = setInterval(update, 200);