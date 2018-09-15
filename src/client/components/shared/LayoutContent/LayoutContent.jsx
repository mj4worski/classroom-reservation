import React from 'react';
import PropTypes from 'prop-types';
import './LayoutContent.scss';

const LayoutContent = ({ children }) => (
  <div className="layout-content">
    {children}
  </div>
);

LayoutContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContent;
