import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import HelpIcon from '@material-ui/icons/Help';

const styles = ({
  icon: {
    height: '16px',
    width: '16px',
    marginTop: '7px',
    marginLeft: '-3px',
    zIndex: '10',
  },
  typography: {
    height: '182px',
    width: '352px',
    fontFamily: 'IBM Plex Sans',
    backgroundColor: '#000000',
    color: '#ffffff',
    paddingTop: '20px',
    paddingLeft: '26px',
    fontSize: '15px',
    lineHeight: 1.47,
  },
  paper: {
    borderRight: 'none',
  },
});

class MoreInfoIcon extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes, popupContent } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.icon}>
        <HelpIcon
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.icon}
        />
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography className={classes.typography}>
            {popupContent}
          </Typography>
        </Popover>
      </div>
    );
  }
}

MoreInfoIcon.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  popupContent: PropTypes.string.isRequired,
};

export default withStyles(styles)(MoreInfoIcon);