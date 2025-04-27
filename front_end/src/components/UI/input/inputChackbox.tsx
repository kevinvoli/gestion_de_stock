"use client"; // Next.js App Router nécessite cette directive

import { useState } from "react";
import styles from "@/styles/components/UI/input/Checkbox.module.css"; // Fichier CSS pour les styles

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
        <div className="form-group">
        <label>
          <input type="radio" name="r3" className="flat-red" checked/>
        </label>
        <label>
          <input type="radio" name="r3" className="flat-red"/>
        </label>
        <label>
          <input type="radio" name="r3" className="flat-red" disabled/>
          Flat green skin radio
        </label>
      </div>
    
    </>

  );
}
