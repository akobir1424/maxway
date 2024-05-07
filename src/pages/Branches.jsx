import axios from "axios";
import { useEffect, useState } from "react";
import { BranchesList } from "../components/BranchesList";

export const Branches = () => {
  const [branches, setBranches] = useState([]);
  async function fetchBranches() {
    const response = await axios.get(
      "https://6630fdcec92f351c03dbd452.mockapi.io/api/n1/branches"
    );
    setBranches(response.data);
  }

  useEffect(() => {
    fetchBranches();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold">Filiallar</h1>
      <BranchesList branches={branches} />
    </div>
  );
};
