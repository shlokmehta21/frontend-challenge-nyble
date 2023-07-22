import React, { useCallback } from 'react';
import { ToastWrapper } from './styles/Toast';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

export type ToastPropsType = {
  children: React.ReactNode;
};

const Toast = ({ children }: ToastPropsType) => {
  return <ToastWrapper>{children}</ToastWrapper>;
};

export const useToast = () => {
  const theme = useTheme();

  const openSuccessToast = useCallback(
    (text: string) =>
      toast(<Toast>{text}</Toast>, {
        progressStyle: { background: theme.colours.success, top: 0 },
      }),
    [toast, theme]
  );

  const openErrorToast = useCallback(
    (text: string) =>
      toast(<Toast>{text}</Toast>, {
        progressStyle: { background: theme.colours.error, top: 0 },
        autoClose: 10000,
      }),
    [toast, theme]
  );

  return [openSuccessToast, openErrorToast];
};

export const useStandardToast = () => {
  const [openSuccessToast, openErrorToast] = useToast();

  const errorToast = useCallback(() => openErrorToast('Oops! Something went wrong.'), [
    openErrorToast,
  ]);

  return [errorToast];
};

export default Toast;
