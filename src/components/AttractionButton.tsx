import { Button } from "./Button";
import CalModal from "./CalModal";

type AttractionButtonProps = {
  isClient: boolean;
};
const AttractionButton = ({ isClient }: AttractionButtonProps) => {
  return (
    <div className="flex gap-8 justify-center w-full items-center">
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
              <div className="absolute -top-full -left-1/4 group-hover:left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:visible group-hover:opacity-100 invisible opacity-0 hidden flex-col items-center justify-center w-full -z-10 lg:flex pointer-events-none">
                <img
                  src="/images/satoru.png"
                  alt="geto"
                  className="h-full opacity-30 rounded-full "
                />
                <p className="text-white h-fit w-full p-2 center text-xl xl:text-3xl">
                  Você precisa de um site para sua empresa?
                </p>
              </div>
            </Button>
          </CalModal>
        </div>
      ) : (
        <div className="flex w-full justify-center relative">
          <Button size="md" color="primary" className="h-fit group flex">
            <p> Quero ser Ascent</p>

            <div className="absolute -top-full -right-1/4 transition-all duration-500 ease-in-out group-hover:right-1/2 transform translate-x-1/2 -translate-y-1/2 group-hover:visible group-hover:opacity-100 invisible opacity-0 hidden flex-col items-center justify-center w-full -z-10 lg:flex pointer-events-none">
              <img
                src="/images/geto.png"
                alt="geto"
                className="h-full rounded-full opacity-30"
              />
              <p className="text-white h-fit text-center w-full p-2 text-xl xl:text-3xl">
                Então você quer ser um de nós?
              </p>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AttractionButton;
