import React from 'react';
import {
  CloseIcon,
  Toast,
  Alert,
  VStack,
  HStack,
  Text,
  IconButton,
} from 'native-base';
import styles from './styles';

export enum ToastStatus {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

interface IToastAlertProps {
  id?: string;
  status?: ToastStatus;
  title: string;
  description: string;
}

export const CustomToast = ({
  id,
  status,
  title,
  description,
}: IToastAlertProps) => (
  <Alert variant={'left-accent'} status={status}>
    <VStack space={1} style={styles.toastWrapper}>
      <HStack style={styles.toastHeaderWrapper}>
        <HStack space={1} style={styles.toastTitleWrapper}>
          <Alert.Icon />
          <Text style={styles.toastTitle}>{title}</Text>
        </HStack>
        <IconButton
          variant={'unstyled'}
          icon={<CloseIcon size="3" />}
          onPress={() => id && Toast.close(id)}
        />
      </HStack>
      <Text style={styles.toastDescription}>{description}</Text>
    </VStack>
  </Alert>
);

CustomToast.defaultProps = {
  id: undefined,
  status: ToastStatus.info,
};
