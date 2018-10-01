import React, { Component } from 'react';
import PropTypes from 'prop-types';

const errorStyle = {
  display: 'flex',
  background: 'red',
  color: 'white',
  width: '100%',
};

// eslint-disable-next-line react/prefer-stateless-function
const withErrorHandler = WrappedComponent => class ErrorHoc extends Component {
        static propTypes = {
          error: PropTypes.bool,
        };

        static defaultProps = {
          error: undefined,
        };

        render() {
          const { error, ...restProps } = this.props;
          if (!error) {
            return <WrappedComponent {...restProps} />;
          }
          return (
            <div style={errorStyle}>
                  Error! There was a problem in the component is operation!
            </div>
          );
        }
};

export default withErrorHandler;
