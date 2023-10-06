import { Button } from "./Button/Button";
import CalModal from "./CalModal";

type AttractionButtonProps = {
  isClient: boolean;
};

const AttractionButton = ({ isClient }: AttractionButtonProps) => {
  return (
    <div className="col-span-1 flex w-full items-center justify-center gap-8">
      {isClient ? (
        <div className="relative flex w-full justify-center">
          <CalModal>
            <Button
              size="md"
              color="primary"
              className="group flex h-fit"
              onClick={async () => {
                console.log("oi");
              }}
            >
              <p className="w-full text-center">Quero contratar</p>
            </Button>
          </CalModal>
        </div>
      ) : (
        <div className="relative col-span-1 flex w-full justify-center">
          <Button size="md" color="secondary" className="group flex h-fit">
            <p> Quero ser Ascent</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AttractionButton;
