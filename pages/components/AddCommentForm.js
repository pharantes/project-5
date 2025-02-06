import styled from "styled-components";
import Image from "next/image";

const AddForm = styled.form`
  position: relative;
  border: 1px solid #101820;
  border-radius: 8px;
`;
const Input = styled.textarea`
  width: 100%;
  border: none;
`;
const Label = styled.label`
  width: 100%;
`;
const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: none;
  background-color: transparent;
  padding: 8px
`;

export default function ArtDetail({ art, onAddComment }) {
  function handleAddComment(e, name, comment) {
    e.preventDefault();
    onAddComment(name, comment);
    e.target.reset();
  }
  return (
    <AddForm
      onSubmit={(e) => handleAddComment(e, art.name, e.target.comment.value)}
    >
      <Label>Add a comment :</Label>
      <Input rows={6} name="comment" type="textarea" />
      <Button>
        <Image alt="submit message icon" src={"/assets/send-message.svg"} width={20} height={20} />
      </Button>

    </AddForm>

  );
}
