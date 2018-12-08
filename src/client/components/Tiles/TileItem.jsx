import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TileItem.scss';

class TileItem extends PureComponent {
    static propTypes = {
      label: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired,
      _id: PropTypes.string.isRequired,
    };

    handleOnClick = () => {
      const { onClick, _id } = this.props;
      onClick(_id);
    }

    render() {
      const {
        label,
        active,
        _id,
      } = this.props;

      return (
        <a
          className={`list-group-item list-group-item-action tile-item ${active ? 'show active' : ''}`}
          data-toggle="list"
          href={`#${_id}`}
          role="tab"
          onClick={this.handleOnClick}
        >
          {label}
        </a>
      );
    }
}

export default TileItem;
