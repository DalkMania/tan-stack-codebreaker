import { messageStateCollection } from "@/db";
import { eq, useLiveQuery } from "@tanstack/react-db";

export const CodeLegend = () => {
  const { data } = useLiveQuery((q) =>
    q.from({ mess: messageStateCollection }).where(({ mess }) => eq(mess.id, "user-message"))
  );

  const letters = [..."abcdefghijklmnopqrstuvwxyz"];
  const encryption = data[0]?.encryption || [];
  const message = data[0]?.message || "";

  return (
    <div className="flex flex-wrap mt-auto">
      {message.length > 0 &&
        letters.map((char, index) => {
          const encryptedChar = encryption[char] ?? char;
          return (
            <div
              key={index}
              className="print:border-black flex flex-col items-center justify-center m-2 p-2 border rounded bg-secondary/10"
            >
              <span className="text-lg">{char.toUpperCase()}</span>
              <span className="material-symbols-outlined character">{encryptedChar}</span>
            </div>
          );
        })}
    </div>
  );
};
