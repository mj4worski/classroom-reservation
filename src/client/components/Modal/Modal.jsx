/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Modal.scss';

export default class Modal extends Component {
    static propTypes = {
      open: PropTypes.bool.isRequired,
      children: PropTypes.node.isRequired,
      title: PropTypes.node.isRequired,
      footer: PropTypes.node,
      onCloseRequest: PropTypes.func,
    }

    static defaultProps = {
      onCloseRequest: () => {},
      footer: null,
    }

    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }

    componentDidMount() {
      window.document.body.appendChild(this.el);
    }

    getSnapshotBeforeUpdate() {
      if (this.props.open) {
        window.document.body.classList.add('modal-open');
        return null;
      }
      window.document.body.classList.remove('modal-open');
      return null;
    }

    componentDidUpdate() {}

    componentWillUnmount() {
      window.document.body.removeChild(this.el);
    }

  renderModal = ({
    children: content, title, onCloseRequest, footer,
  }) => (
    <div
      className="modal fade show modal--fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCloseRequest}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {content}
          </div>
          {footer &&
          <div className="modal-footer">
            {footer}
          </div>
          }
        </div>
      </div>
    </div>
  )

  render() {
    return this.props.open ? ReactDOM.createPortal(
      this.renderModal(this.props),
      this.el,
    ) : null;
  }
}
