import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";
import image from "./assets/photo.jpg";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript ", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, teal, #ff0099)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
      "border-radius": "2rem",
    },
    alt: "Это картинка",
  }),

  new TextBlock(
    "Здесь моя работа с классами на чистом JavaScript, в дальнейшем буду дополнять его и улучшать",
    {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        padding: "1rem",
        "font-weight": "bold",
      },
    }
  ),

  new ColumnsBlock(
    ["Колонка номер один", "Колонка номер два", "Колонка номер три"],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
];
