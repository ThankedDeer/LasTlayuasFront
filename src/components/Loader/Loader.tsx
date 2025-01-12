import { Spinner } from "@nextui-org/react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-md flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <Spinner label="Loading..." color="primary" size="lg" />
      </div>
    </div>
  );
}
