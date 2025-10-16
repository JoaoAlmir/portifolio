import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";

const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "SEU_SERVICE_ID",
      "SEU_TEMPLATE_ID",
      formData,
      "SUA_PUBLIC_KEY"
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Erro ao enviar mensagem.");
    });
  };

  return (
    <div className="email-container">
      <h2>Fale comigo</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Email;
