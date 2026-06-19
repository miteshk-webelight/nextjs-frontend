import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

type ReviewImageModalProps = {
  image: string | null;
  onClose: () => void;
};

export function ReviewImageModal({ image, onClose }: Readonly<ReviewImageModalProps>) {
  return (
    <Dialog
      open={Boolean(image)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none" showCloseButton>
        {image && (
          <div className="relative">
            <Image
              src={image}
              alt="Review image"
              width={1400}
              height={1000}
              className="h-auto w-full rounded-lg object-contain"
              sizes="(max-width:768px) 100vw, 80vw"
              priority
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
