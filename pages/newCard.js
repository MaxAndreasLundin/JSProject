import Form from "../components/Form";

const NewCard = () => {
  const cardForm = {
    title: "",
    description: "",
    name: "",
    date: "",
    time: "",
    place: "",
    avatar: "",
  };

  return <Form cardForm={cardForm} />;
};

export default NewCard;
