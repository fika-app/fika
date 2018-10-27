import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Lala = styled(Text)`
  background: green;
  color: blue;
`;

export default class MonoText extends React.Component {
  render() {
    return <Lala {...this.props}>{this.props.children}</Lala>;
  }
}
