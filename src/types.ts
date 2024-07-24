export type ModalProps = {
  message: string;
  title: string;
  buttonText: string;
  isOpen: boolean;
  toggleOpen: () => void;
  callbackOnClosed?: () => void;
};
