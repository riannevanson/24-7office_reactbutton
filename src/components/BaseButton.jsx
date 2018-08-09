import * as React from 'react'

import "./Buttons.scss";

export default class BaseButton extends React.PureComponent {
  label = this.props.label || "button"
  color = this.props.color || "Brand-blue"
  buttonType = this.props.buttonType || 'default'
  size = this.props.size || "large"
  customTheme = this.props.customTheme || false
  disabled = this.props.disabled || false
  href = this.props.href || ''
  target = this.props.target || ''
  type = this.props.type || "button"
  name = this.props.name || "button"


  colorClass () {
    return this.color === '' || this.buttonType !== 'default' ? '' : `BaseButton-${this.color}`
  }
  sizeClass () {
    return this.size === '' ? 'BaseButton-large' : `BaseButton-${this.size}`
  }
  buttonTypeClass () {
    return this.buttonType === 'default' ? '' : `BaseButton-${this.buttonType}`
  }
  customThemeClass () {
    return this.customTheme ? 'custom-theme' : '';
  }
  classes() {
    return 'BaseButton ' + this.colorClass() + ' ' + this.sizeClass() + ' ' +
      this.buttonTypeClass() + ' ' + this.customThemeClass();
  }

  render() {


    return (<div>
       
      <button className={this.classes()} disabled={this.disabled} type={this.type} name={this.name}>{this.label}</button>
      <a className={this.classes()} href={this.href} target={this.target}>{this.label}</a>

    </div>)
  }
}
