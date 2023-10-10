import { Button } from "./Button/Button";
import CalModal from "./CalModal";

const CalButton = () => {
  return (
    <CalModal>
      <Button
        size="md"
        color="secondary"
        className="group flex h-fit w-fit self-center"
        onClick={async () => {
          console.log("oi");
        }}
      >
        <p className="w-full text-center">Agendar reunião</p>
      </Button>
    </CalModal>
  );
};

export default CalButton;
