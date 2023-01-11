import React, {useState} from 'react';
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
  secondInputName?: string;
  onSubmit: (data: {[x: string]: string}) => void;
}

const ModalWithInput = ({
  buttonText,
  headerText,
  firstInputName,
  secondInputName,
  onSubmit,
}: Props) => {
  const defaultValues = {
    [firstInputName]: '',
    [secondInputName as string]: '',
  };

  const [modalVisible, setModalVisible] = useState(false);
  const {
    control,
    formState: {errors},
    setError,
    clearErrors,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onPress = (data: {[x: string]: string}) => {
    if (!data.firstInputValue || !data.secondInputValue) {
      Keyboard.dismiss();
      setError(firstInputName, {
        type: 'Invalid email or password',
        message: 'You need to enter a valid user and password',
      });
    }
    onSubmit(data);
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
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
              <Button
                style={styles.button}
                onPress={() => {
                  setModalVisible(false);
                }}>
                Cancel
              </Button>
              <Button style={styles.button} onPress={handleSubmit(onPress)}>
                Send
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        backgroundColor={'#187DE9'}
        onPress={() => {
          setValue(firstInputName, '');
          setValue(secondInputName as string, '');
          clearErrors();
          setModalVisible(!modalVisible);
        }}>
        {buttonText}
      </Button>
    </>
  );
};

export default ModalWithInput;
