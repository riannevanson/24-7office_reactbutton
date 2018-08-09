import * as React from 'react'
import BaseButton from './BaseButton'


class ButtonContainer extends React.PureComponent {

    label = "button"
    color =  "Brand-blue"
    buttonType = 'default'
    size = "large"
    customTheme = false
    disabled = false
    href = ''
    target = ''
    type = "button"
    name = "button"

  render() {
  

    return <div>
        
        <BaseButton label={this.label} buttonType={this.buttonType} size={this.size} disabled color={this.color}/>
        <BaseButton label="Primary" buttonType="primary"/>
        <BaseButton label="Secondary" buttonType="secondary" />
        <BaseButton label="Flat" buttonType="flat" />
        <BaseButton label="Button" buttonType="default" />

        <BaseButton label="Large" buttonType="primary" size="large"/>
        <BaseButton label="Medium" buttonType="primary" size="medium"/>
        <BaseButton label="Small" buttonType="primary" size="small"/>
        <BaseButton label="Tiny" buttonType="primary" size="tiny"/>

        <BaseButton label="Primary" buttonType="primary" disabled/>
        <BaseButton label="Secondary" buttonType="secondary" disabled/>
        <BaseButton label="Flat" buttonType="flat" disabled/>
        <BaseButton label="Button" buttonType="default" disabled/>

        <BaseButton label="Brand-blue" color="brand-blue" />
        <BaseButton label="Black" color="black"/>
        <BaseButton label="Black primary?" buttonType="primary" color="black"/>

        <BaseButton customTheme label="Brand-blue" color="brand-blue" />
        <BaseButton customTheme label="Primary" buttonType="primary"/>
        <BaseButton customTheme label="Link" target="_blank" href="https://google.com" />

    </div>
  }
}

export default (ButtonContainer)
