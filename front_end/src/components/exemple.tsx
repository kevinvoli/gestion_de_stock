"use client";

import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedData: Record<string, any>) => void;
  data?: Record<string, any>; // Données optionnelles
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave, data }) => {
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    id: "",
    parentId: ""
  });
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Désactive le scroll en arrière-plan
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Nettoyage à la fermeture
    };
  }, [isOpen]);

  useEffect(() => {
    if (data) {
      setFormData((prev) => ({
        ...prev,
        email: data.email || "",
        password: data.password || "",
      }));
    }
  }, [data]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files?.[0] : value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-10 ">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <button className="text-gray-600 hover:text-gray-900" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="modal-body">
          <div className="box box-primary">
            <div className="box-header">
              <h3 className="box-title">Ajouter nouveau</h3>
            </div>

            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="nom"
                    onChange={handleChange}
                    placeholder="Entrez votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">description</label>
                  <input
                    type="txt"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="description"
                    onChange={handleChange}
                    placeholder="description"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">categorie parent</label>
                  <input
                    type="txt"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="parents"
                    onChange={handleChange}
                    placeholder="categorie parent"
                  />
                </div>        
              </div>
            </form>
          </div>
        </div>

        <div className="modal-footer mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-sm" onClick={onClose}>
            Fermer
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-sm" onClick={handleSave}>
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
