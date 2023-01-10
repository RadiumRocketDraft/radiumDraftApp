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
  secondInputName: string;
}

const ModalWithInput = ({
  buttonText,
  headerText,
  firstInputName,
  secondInputName,
}: Props) => {
  const newObject = {
    [firstInputName]: '',
    [secondInputName]: '',
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const {
    control,
    formState: {errors},
    setError,
    watch,
    clearErrors,
  } = useForm({
    defaultValues: newObject,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  useEffect(() => {
    return () => {};
  }, []);
  const firstInputValue = watch(firstInputName);
  const secondInputValue = watch(secondInputName);

  const onPress = () => {
    if (!firstInputValue || !secondInputValue) {
      Keyboard.dismiss();
      setError(firstInputName, {
        type: 'Invalid email or password',
        message: 'You need to enter a valid user and password',
      });
    }
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
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                style={styles.button}
                onPress={() => {
                  setModalVisible(false);
                }}>
                Cancel
              </Button>
              <Button style={styles.button} onPress={onPress}>
                Send
              </Button>
              {errors[firstInputName] && <Text>Pepe</Text>}
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button
        backgroundColor={'#187DE9'}
        onPress={() => {
          clearErrors();
          setModalVisible(!modalVisible);
        }}>
        {buttonText}
      </Button>
    </>
  );
};

export default ModalWithInput;
