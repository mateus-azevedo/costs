import { useState } from "react";

import { Input, SubmitButton } from "../";
import styles from "./ServiceForm.module.css";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  const submit = (e) => {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  };

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChage={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChage={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChage={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
