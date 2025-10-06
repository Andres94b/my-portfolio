"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { CircleUser } from "../icons";
import { title } from "../primitives";
import LoginForm from "./login-form";

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        isIconOnly
        radius="full"
        className="bg-background"
      >
        <CircleUser className="text-foreground" />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-foreground"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                <span className={title({ className: "text-background" })}>
                  Login
                </span>
              </ModalHeader>
              <ModalBody>
                <LoginForm onClose={onClose} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
