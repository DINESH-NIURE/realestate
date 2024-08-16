"use client";

import FileInput from "@/app/components/fileUpload";
import { updateUserAvatar } from "@/lib/action/user";
import { uploadAvatar } from "@/lib/upload";
import { PencilIcon } from "@heroicons/react/16/solid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UploadAvatar = ({userId}: {userId:string}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  return (
    <div>
      <button onClick={onOpen}>
        <PencilIcon className=" w-6 text-slate-400 hover:text-primary" />
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload Avatar
              </ModalHeader>
              <ModalBody>
                <FileInput
                  onChange={(e) => setImage((e as any).target.files[0])}
                />
                {image && <Image src={URL.createObjectURL(image)} alt={""} />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancle
                </Button>
                <Button
                  isLoading={isSubmitting}
                  color="primary"
                  onPress={async() => {
                    setIsSubmitting(true);
                    if (!image) {
                      onClose();
                      return;
                    }
                    const avatarUrl = await uploadAvatar(image);
                    const res = await updateUserAvatar(avatarUrl, userId);
                    router.refresh();
                    setIsSubmitting(false);
                    onClose();
                  }}>
                  Change Avatar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
export default UploadAvatar;
