import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Appbar = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    all: unset;
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Input = styled.div`
  padding: 0 1rem;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid #444;

  label {
    flex: 1;
  }

  input {
    all: unset;
    flex: 6;
  }
`;

const TextArea = styled.textarea`
  all: unset;
  flex: 1;
  padding: 1rem 0;
  margin: 0 1rem;
`;
const Mail = () => {
  const [state, handleSubmit] = useForm("xknyvlel");

  if (state.succeeded) {
    return <p>Thanks for mailing!</p>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Appbar>
        <h1>Send a mail</h1>
        <button type="submit" disabled={state.submitting}>
          <BiSend />
        </button>
      </Appbar>
      <Input>
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="email"
          name="from"
          placeholder="johndoe@gmail.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Input>

      <Input>
        <label htmlFor="receiver">To</label>
        <input
          id="receiver"
          type="text"
          name="receiver"
          value="Madhan S"
          readOnly
        />
      </Input>
      <Input>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          required
        />
        <ValidationError prefix="Email" field="name" errors={state.errors} />
      </Input>
      <Input>
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Hi there!"
          required
        />
        <ValidationError prefix="Email" field="subject" errors={state.errors} />
      </Input>
      <TextArea
        id="message"
        name="message"
        placeholder="Leave your message here..."
      />
    </Form>
  );
};

export default Mail;
