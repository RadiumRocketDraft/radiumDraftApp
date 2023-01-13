import React, {useEffect} from 'react';
import {Button, Modal, Text} from 'native-base';
import Input from 'components/shared/input';
import styles from './styles';
import {useForm} from 'react-hook-form';
import {schema} from './validations';
import {yupResolver} from '@hookform/resolvers/yup';
import {Keyboard} from 'react-native';

interface Props {
  buttonText: string;
  headerText: string;
  firstInputName: string;
  isVisible: boolean;
  onClose: () => void;
  secondInputName?: string;
  onSubmit: (data: {[x: string]: string}) => void;
  errorType: string;
  errorMessage: string;
}

const ModalWithInput = ({
  headerText,
  firstInputName,
  secondInputName,
  onSubmit,
  isVisible,
  onClose,
  errorType,
  errorMessage,
}: Props) => {
  const defaultValues = {
    [firstInputName]: '',
    [secondInputName as string]: '',
  };
  const {
    control,
    formState: {errors},
    setError,
    clearErrors,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });
  // TODO: Improve logic to handle use errors on optional input too
  const onPress = (data: {[x: string]: string}) => {
    if (data === undefined || !data.firstInputValue) {
      Keyboard.dismiss();
      setError(firstInputName, {
        type: errorType,
        message: errorMessage,
      });
    }
    onSubmit(data);
  };

  useEffect(() => {
    if (!isVisible) reset();
  }, [reset, isVisible]);

  return (
    <>
      <Modal isOpen={isVisible} onClose={onClose}>
        <Modal.Content>
          <Modal.Header backgroundColor={'#187DE9'}>{headerText}</Modal.Header>
          <Modal.Body>
            <Input
              onFocus={() => {
                clearErrors(firstInputName);
              }}
              type="text"
              label={firstInputName}
              name={firstInputName}
              control={control}
              customStyle={styles.input}
            />
            {secondInputName && (
              <Input
                onFocus={() => {
                  clearErrors(secondInputName);
                }}
                type="text"
                label={secondInputName}
                name={secondInputName}
                control={control}
                customStyle={styles.input}
              />
            )}
          </Modal.Body>
          {errors[firstInputName] && (
            <Text style={styles.error}>
              Please enter a valid email and password
            </Text>
          )}
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} onPress={onClose}>
                Cancel
              </Button>
              <Button style={styles.button} onPress={handleSubmit(onPress)}>
                Send
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalWithInput;
