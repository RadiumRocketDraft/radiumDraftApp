import {InfoIcon, Popover, View} from 'native-base';
import React, {FC} from 'react';

interface Props {
  title?: string;
  description: string;
}

const CustomTooltip: FC<Props> = ({title, description}) => (
  <View m={2}>
    <Popover trigger={props => <InfoIcon {...props} />}>
      <Popover.Content>
        <Popover.Arrow />
        <Popover.CloseButton />
        {!!title && <Popover.Header>Skill Functionality</Popover.Header>}
        <Popover.Body>{description}</Popover.Body>
      </Popover.Content>
    </Popover>
  </View>
);

export default CustomTooltip;
