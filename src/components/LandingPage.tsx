interface Props {
  onClick: () => void;
}
const LandingPage = ({ onClick }: Props) => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <button
          type="button"
          className="btn btn-outline-light"
          data-bs-toggle="button"
          aria-pressed="true"
          onClick={onClick}
        >
          <h1>Click me for a surprise!</h1>
        </button>
      </div>
    </>
  );
};

export default LandingPage;
