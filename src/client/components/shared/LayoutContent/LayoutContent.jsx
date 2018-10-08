import React from 'react';
import PropTypes from 'prop-types';
import './LayoutContent.scss';

const LayoutContent = ({ children, className }) => (
  <div className={`layout-content ${className}`}>
    {children}
  </div>
);

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LayoutContent.defaultProps = {
  className: '',
}

export default LayoutContent;
