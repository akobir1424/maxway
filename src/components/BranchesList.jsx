import { BrancheItem } from "./BrancheItem";

export const BranchesList = ({ branches }) => {
  return (
    <div>
      {branches.map((branche) => {
        return <BrancheItem key={branche.id} branche={branche} />;
      })}
    </div>
  );
};
