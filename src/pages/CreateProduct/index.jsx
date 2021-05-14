import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { Form, Submit } from "./styled-components";

const CreateProduct = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [startOfCareer, setStartOfCareer] = useState("");

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    if (name && genre && startOfCareer) {
      setIsLoading(true);

      fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          genre,
          startOfCareer
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (Object.keys(data).length > 0) {
            // Product has been created
            setIsLoading(false);
            history.push("/?created=true");
          }
        })
        .catch(() => {
          console.error("Something went wrong on your request");
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <p>Add an artist to our database so more people can find out about them!</p>
      <Form onSubmit={handleOnFormSubmit}>
        <Input
          label="Name"
          name="name"
          type="text"
          value={name}
          setValue={(value) => setName(value)}
        />
        <Input
          label="Genre"
          name="genre"
          type="text"
          value={genre}
          setValue={(value) => setGenre(value)}
        />
        <Input
          label="Start Of Career"
          name="startOfCareer"
          type="text"
          value={startOfCareer}
          setValue={(value) => setStartOfCareer(value)}
        />

        {isLoading && <p>Is Loading!!!</p>}

        <Submit disabled={isLoading}>Create</Submit>
      </Form>
    </div>
  );
};

export default CreateProduct;
