import ImageCarousel from "../../../components/ImageCarousel";

export default {
    title: "ReusedСomponents/ImageCarousel",
    component: ImageCarousel,
    argTypes: {
        items: { type: "JSX.Element[]", description: "Элементы в карусели" },
        promoMod: {
            type: "boolean",
            description: "Включать ли режим промо",
            defaultValue: false,
        },
    },
};

const styles = {
    width: "300px",
    height: "200px",
    fontSize: "50px",
    border: "1px solid white",
};
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "navy",
    "olivedrab",
];

const Template = (arg) => <ImageCarousel {...arg} />;
export const Default = Template.bind({});
Default.args = {
    items: colors.map((color, index) => (
        <div style={{ ...styles, backgroundColor: color }}>{index}</div>
    )),
};

export const PromoCarousel = Template.bind({});
PromoCarousel.args = {
    items: colors.map((color, index) => (
        <div style={{ ...styles, width: "1000px", backgroundColor: color }}>
            {index}
        </div>
    )),
    promoMod: true,
};
