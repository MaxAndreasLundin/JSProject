import Form from "../components/Form";

const NewCard = () => {
  const cardForm = {
    title: "",
    description: "",
  };

  return <Form formId="add-card-form" cardForm={cardForm} />;
};

export default NewCard;
