import Form from "../components/Form";

const NewCard = () => {
  const cardForm = {
    title: "",
    description: "",
  };

  return <Form cardForm={cardForm} />;
};

export default NewCard;
