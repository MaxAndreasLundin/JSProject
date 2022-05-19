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
    tags: ["", "", ""],
    tag1: "",
    tag2: "",
    tag3: "",
    age: "",
  };

  return <Form cardForm={cardForm} />;
};

export default NewCard;
