interface SubmittedProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Submitted = ({ setSubmitted }: SubmittedProps) => {
  return (
    <div className="submitted">
      <p>Your form is submitted. The card successfully added!</p>
      <button className="submit-button" onClick={() => setSubmitted(false)}>
        OK
      </button>
    </div>
  );
};

export default Submitted;
