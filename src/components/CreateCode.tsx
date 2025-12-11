import { type ChangeEventHandler, useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { messageStateCollection } from "@/db";
import { useLiveQuery, eq } from "@tanstack/react-db";
import { getSymbolsForLetters } from "@/lib/utils";
import { CodeMessage } from "./CodeMessage";
import { Button } from "./ui/button";

export const CreateCode = () => {
  const { data, isReady } = useLiveQuery((q) =>
    q
      .from({ mess: messageStateCollection })
      .where(({ mess }) => eq(mess.id, "user-message"))
      .findOne()
  );

  const [message, setMessage] = useState<string>(data?.message || "");

  const print = () => window.print();

  useEffect(() => {
    const encrypted = getSymbolsForLetters();
    if (!data && !isReady) return;
    console.log("data", data);
    //console.log("ready", isReady);

    if (isReady && data === undefined) {
      messageStateCollection.insert({
        id: "user-message",
        message: "",
        encryption: encrypted,
      });
      return;
    }

    if (isReady && data !== undefined) {
      messageStateCollection.update("user-message", (draft) => ({
        ...draft,
        encryption: encrypted,
      }));
      return;
    }
  }, [isReady, data]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value);
    messageStateCollection.update("user-message", (draft) => {
      draft.message = e.target.value;
    });
  };

  return (
    <div className="my-8 flex flex-col items-center gap-10 flex-1 w-full max-w-3xl">
      <Textarea
        value={message}
        onChange={handleChange}
        rows={8}
        placeholder="Type your message here."
        className="print:hidden bg-white/10 text-foreground py-2 px-3 rounded-xl w-full"
      />
      <Button disabled={message.length === 0} onClick={print} className="print:hidden self-end">
        Print
      </Button>

      <CodeMessage />
    </div>
  );
};
