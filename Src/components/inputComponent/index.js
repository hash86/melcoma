import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'native-base';

export default ({input, keyboardType, externalRef, ...rest}) => (
  <Input
    {...rest}
    ref={externalRef}
    keyboardType={keyboardType}
    maxLength={1}
    value={input.value}
    onChangeText={input.onChange}
  />
);

// InputComponent.propTypes = {
//   input: PropTypes.object,
//   externalRef: PropTypes.object,
// };
