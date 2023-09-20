import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog/dialog";
//@ts-expect-error
import Cal from "@calcom/embed-react";

type Props = { children: React.ReactNode };

const CalModal = ({ children }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle className="w-full text-center text-orange-400">
          Agende uma chamada conosco
        </DialogTitle>

        <Cal
          calLink="kriguer-freitas-gd9wpy/solicitacao-de-servicos-de-software-conversa-com-cliente"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalModal;
