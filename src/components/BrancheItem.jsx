export const BrancheItem = ({ branche }) => {
  const { brancheName, brancheTime, brancheDay, branchePhone } = branche;
  return (
    <div className="p-[1rem] w-[600px] rounded-xl shadow-2xl my-5">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">{brancheName}</h1>
          <p>{brancheTime}</p>
        </div>
        <p className="text-green-600">22:00 gacha ochiq</p>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500 text-sm">Ish vaqti:</p>
          <p>{brancheDay}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-sm">Telefon:</p>
          <p>{branchePhone}</p>
        </div>
      </div>
    </div>
  );
};
