<button>
  <slot></slot>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    height: 100%;
    border: none;
    border-radius: 8px;

    padding: 0 1.5rem;

    background-color: #fa8a2e;
    color: #ffffff;

    font-size: 1rem;

    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #ff8f45;
  }
</style>