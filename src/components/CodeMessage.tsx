import { messageStateCollection } from "@/db";
import { eq, useLiveQuery } from "@tanstack/react-db";

export const CodeMessage = () => {
  const { data } = useLiveQuery((q) =>
    q.from({ mess: messageStateCollection }).where(({ mess }) => eq(mess.id, "user-message"))
  );

  const message = data[0]?.message || "";
  const words = message.split(" ");
  const regex = /[a-z]/i;

  return (
    <div className="text-center flex flex-wrap gap-8 mt-auto">
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="word flex flex-wrap gap-4 justify-center">
          {word
            .toLowerCase()
            .split("")
            .map((char, charIndex) => {
              const encryptedChar = data[0]?.encryption?.[char] ?? char;
              return (
                <div>
                  <span key={charIndex} className="material-symbols-outlined character text-5xl! uppercase">
                    {encryptedChar}
                  </span>
                  <div className={encryptedChar.match(regex) ? `bg-gray-200 w-12 h-12` : `w-12 h-12`}></div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};
