import React from 'react';
import logoSvg from '../media/sinicx.svg';
import ELSALogoPng from '../media/elsa-logo.png';
import WeblabLogoPng from '../media/matsuolab-logo.png';

export class CorporateLogo extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      xs: { height: '12px', margin: '6px' },
      sm: { height: '14px', margin: '7px' },
      lg: { height: '20px', margin: '10px' },
      xl: { height: '24px', margin: '12px' },
    };
  }

  render() {
    const logoStyle = this.props.size
      ? this.style[this.props.size]
      : this.style['xs'];
    const divStyle = { filter: this.props.inverted ? 'invert(100%)' : 'none' };
    return (
      <div style={divStyle}>
        <img src={logoSvg} style={logoStyle} />
      </div>
    );
  }
}

export class ELSALogo extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      xs: { height: '12px', margin: '6px' },
      sm: { height: '14px', margin: '7px' },
      lg: { height: '20px', margin: '10px' },
      xl: { height: '24px', margin: '12px' },
    };
  }

  render() {
    const logoStyle = this.props.size
      ? this.style[this.props.size]
      : this.style['xs'];
    const divStyle = { filter: this.props.inverted ? 'invert(100%)' : 'none' };
    return (
      <div style={divStyle}>
        <img src={ELSALogoPng} style={logoStyle} />
      </div>
    );
  }
}

export class WeblabLogo extends React.Component {
  constructor(props) {
    super(props);
    this.style = {
      xs: { height: '12px', margin: '6px' },
      sm: { height: '14px', margin: '7px' },
      lg: { height: '20px', margin: '10px' },
      xl: { height: '24px', margin: '12px' },
    };
  }

  render() {
    const logoStyle = this.props.size
      ? this.style[this.props.size]
      : this.style['xs'];
    const divStyle = { filter: this.props.inverted ? 'invert(100%)' : 'none' };
    return (
      <div style={divStyle}>
        <img src={WeblabLogoPng} style={logoStyle} />
      </div>
    );
  }
}