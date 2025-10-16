import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    fetch("https://formspree.io/f/mpwykony", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Mensagem enviada com sucesso!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error("Erro ao enviar mensagem.");
        }
      })
      .catch(() => toast.error("Erro ao enviar mensagem."));
  };

  return (
    <div className="email-container">
      <h2>Send me a message!</h2>
      <h3>
        Got a question or proposal, or just want to say hello? Go ahead.
      </h3>
      <form onSubmit={handleSubmit} className="email-form">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit">Enviar</button>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Email;
