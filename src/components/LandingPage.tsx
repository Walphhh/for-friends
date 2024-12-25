import { useState } from "react";

interface Props {
  onClick: (name: string) => void;
}

const LandingPage = ({ onClick }: Props) => {
  const [name, setName] = useState(""); // state for name

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    onClick(name); // Pass the name value to onClick
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="person-name" className="form-label">
              Your Name?
            </label>
            <input
              type="text"
              className="form-control"
              id="person-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-light"
            data-bs-toggle="button"
            aria-pressed="true"
          >
            <h1>Click me for a surprise!</h1>
          </button>
        </form>
      </div>
    </>
  );
};

export default LandingPage;
