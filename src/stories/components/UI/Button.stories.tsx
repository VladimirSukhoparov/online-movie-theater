import React from "react";
import Button from "../../../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/components/UI/Button.module.scss";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    type: {
      type: "string",
      description: "Тип кнопки",
      defaultValue: "button",
      options: ["button", "reset", "submit"],
      control: {
        type: "radio",
      },
    },
    classN: {
      type: "string",
      description: "Класснэйм кнопки",
      defaultValue: "",
      options: [
        "header_subscribe",
        "footer_third_button",
        "second_content",
        "header_notification",
        "header_login",
      ],
      control: {
        type: "radio",
      },
    },
    children: {
      type: "string",
      description: "label",
      defaultValue: "Нажми на меня",
    },
  },
};

const Template = (arg) => <Button {...arg} />;
export const Default = Template.bind({});
Default.args = {
  children: "Нажми на меня",
  type: ["button", "reset", "submit"],
  classN: [
    "header_subscribe",
    "footer_third_button",
    "second_content",
    "header_notification",
    "header_login",
  ],
};

export const HeaderSubscribe = Template.bind({});
HeaderSubscribe.args = {
  children: "30 дней за 1р",
  type: "button",
  classN: "header_subscribe",
};

export const FooterThirdButon = Template.bind({});
FooterThirdButon.args = {
  children: "Напишите нам",
  type: "button",
  classN: "footer_third_button",
};

export const FooterSocialsButton = Template.bind({});
FooterSocialsButton.args = {
  children: [
    <img
      src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg"
      alt=""
    />,
  ],
  type: "button",
  classN: "second_content",
};

export const HeaderNotification = Template.bind({});
HeaderNotification.args = {
  children: [<FontAwesomeIcon icon={faBell} />],
  type: "button",
  classN: "header_notification",
};

export const HeaderLogin = Template.bind({});
HeaderLogin.args = {
  children: [<FontAwesomeIcon icon={faUser} />],
  type: "button",
  classN: "header_login",
};
