import React from "react";
import Button from "../../../components/reusedСomponents/Button";
import '../../../styles/components/reusedСomponents/Button.module.scss'

export default {
  title: "ReusedСomponents/Button",
  component: Button,
  argTypes:{
    type:{
        type:'string',
        description:'Тип кнопки',
        defaultValue:'button',
        options:['button','reset','submit'],
        control:{
            type:'radio'
        }
    },
    classN:{
        type:'string',
        description:'Класснэйм кнопки',
        defaultValue:'',
        options:['header_subscribe','footer_third_button'],
        control:{
            type:'radio'
        }
    },
    children:{
        type:'string',
        description:'label',
        defaultValue:'Нажми на меня',
    }
  }
};

 const Template = (arg) => <Button {...arg}/>;
 export const Default = Template.bind({});
 Default.args = {
    children: 'Нажми на меня',
    type:['button','reset','submit'],
    classN:['header_subscribe','footer_third_button'],
 }

 export const HeaderSubscribe = Template.bind({});
 HeaderSubscribe.args = {
    children: '30 дней за 1р',
    type:'button',
    classN:'header_subscribe',
 }

 export const FooterThirdButon = Template.bind({});
 FooterThirdButon.args = {
    children: 'Напишите нам',
    type:'button',
    classN:'footer_third_button',
 }