import React, { useState, FormEvent } from "react";
import { toast, Toaster } from "sonner";
import styles from "./create.module.css";
import axios from "axios";
import { useAuth } from "../context/useSession";

function CreateOrder() {
  const [fullname, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [description, setDescription] = useState("");
  // const [pdf_file, setFile] = useState<File | null>(null);
  const [type_project, setProjectType] = useState("");

  const { user } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = user?.token;
    const id = user?.detailsUser._id;
    const email = user?.detailsUser.email;

    try {
      const formData = {
        type_project,
        fullname,
        email,
        phone,
        // pdf_file,
        token,
        user: id,
      };

      const response = await axios.post("/api/order", formData);
      toast.success(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error when requesting order");
    }
  };
  return (
    <>
      <Toaster richColors />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.selectedType}>
          <p
            className={
              type_project == "frontend" ? styles.select : styles.btnOpt
            }
            onClick={() => {
              setProjectType("frontend");
            }}
          >
            Frontend
          </p>
          <p
            onClick={() => {
              setProjectType("backend");
            }}
            className={
              type_project == "backend" ? styles.select : styles.btnOpt
            }
          >
            Backend
          </p>
          <p
            className={
              type_project == "full-stack" ? styles.select : styles.btnOpt
            }
            onClick={() => {
              setProjectType("full-stack");
            }}
          >
            Full-Stack
          </p>
          <p
            className={
              type_project == "static-page" ? styles.select : styles.btnOpt
            }
            onClick={() => {
              setProjectType("static-page");
            }}
          >
            Static-Page
          </p>
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input_field}
            type="text"
            required
            value={fullname}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <span className={styles.input_label}>Nombre Completo</span>
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input_field}
            type="text"
            required
            value={user?.detailsUser.email}
            name="email"
          />
          <span className={styles.input_label}>Email</span>
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input_field}
            type="text"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <span className={styles.input_label}>Telefono</span>
        </div>

        {/* <div className={styles.inputBox}>
          <textarea
            className={styles.input_field}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
          <span className={styles.input_label}>Descripción del Proyecto</span>
        </div> */}
        <div className={styles.inputBoxFile}>
          <p>
            Attach information about your idea or problem that you need to solve
            with software
          </p>
          <input
            type="file"
            name="resumen"
            onChange={(e) => {
              const selectedFile = e.target.files ? e.target.files[0] : null;
              // setFile(selectedFile);
            }}
          />
          <span className={styles.input_label_file}>Resumen (pdf)</span>
        </div>
        <div className={styles.boxBtnSubmit}>
          <button type="submit">Solicitar Cita</button>
        </div>
      </form>
    </>
  );
}

export default CreateOrder;
