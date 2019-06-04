import * as React from 'react';
import { connect } from '../fluent';


const BasicInitializer = connect().with(({ signals }) => ({
  initialize: signals.initialize,
})).toClass((props) =>
  class BasicInitializerPure extends React.Component<typeof props> {

    componentDidMount() {
      this.props.initialize();
    }

    render() {
      return this.props.children;
    }
  }
);


export {
  BasicInitializer,
};
