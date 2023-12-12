let currentPlayer = 'X';
    let gameActive = true;
    let board = ['', '', '', '', '', '', '', '', ''];

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const boardDiv = document.getElementById('board');
    const resultDiv = document.getElementById('result');

    function handleCellClick(clickedCellEvent) {
      const clickedCell = clickedCellEvent.target;
      const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

      if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
      }

      board[clickedCellIndex] = currentPlayer;
      clickedCell.textContent = currentPlayer;
      checkResult();
      togglePlayer();
    }

    function checkResult() {
      let roundWon = false;
      for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          roundWon = true;
          break;
        }
      }

      if (roundWon) {
        gameActive = false;
        resultDiv.textContent = `Player ${currentPlayer} wins!`;
        return;
      }

      if (!board.includes('')) {
        gameActive = false;
        resultDiv.textContent = 'It\'s a tie!';
      }
    }

    function togglePlayer() {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function initializeGame() {
      boardDiv.innerHTML = '';
      resultDiv.textContent = '';
      gameActive = true;
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';

      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-cell-index', i);
        cell.addEventListener('click', handleCellClick);
        boardDiv.appendChild(cell);
      }
    }

    initializeGame();
  