import { Button } from "./Button/Button";
import CalModal from "./CalModal";

type AttractionButtonProps = {
  isClient: boolean;
};
const AttractionButton = ({ isClient }: AttractionButtonProps) => {
  return (
    <div className="flex gap-8 justify-center w-full items-center col-span-1">
      {isClient ? (
        <div className="flex relative w-full justify-center">
          <CalModal>
            <Button
              size="md"
              color="primary"
              className="h-fit group flex"
              onClick={async () => {
                console.log("oi");
              }}
            >
              <p>Quero contratar</p>
            </Button>
          </CalModal>
        </div>
      ) : (
        <div className="flex w-full justify-center relative col-span-1">
          <Button size="md" color="secondary" className="h-fit group flex">
            <p> Quero ser Ascent</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AttractionButton;
