function Progress() {
  return (
    <header className="progress">

      <progress max="15" value="0"></progress>

      <p>
        Question <strong>1</strong> / 15
      </p>

      <p>
        <strong>0</strong> / 280
      </p>

    </header>
  );
}

export default Progress;
