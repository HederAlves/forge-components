import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "../src/container/Container"
import { BoxStories } from "./Styles";

export default {
    title: "Layout/Container",
    component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
    <Container {...args}>
        <BoxStories></BoxStories>
        <BoxStories></BoxStories>
        <BoxStories></BoxStories>
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    gap: 10,
    justify: "center",
};
