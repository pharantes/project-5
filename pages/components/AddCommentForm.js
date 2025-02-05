import styled from "styled-components";

const AddForm = styled.form`
max-width: 400px
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
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
      <input name="comment" type="textarea" rows="4" cols="50" />
      <button type="submit">Add Comment</button>
    </AddForm>
  );
}
