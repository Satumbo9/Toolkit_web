import {
  Heading1,
  Heading2,
  TableRowsSplit,
  SeparatorHorizontal,
  Text,
  AlignLeft,
  FileDigit,
  List,
  CalendarRange,
  ChevronDown,
  CircleCheck,
} from "lucide-react";
import React from "react";
import { TextFieldElement } from "./Fields/Text";

export const FormElements = [
  {
    id: "1",
    title: "Heading",
    icon: [Heading1],
  },
  {
    id: "2",
    title: "Sub-heading",
    icon: [Heading2],
  },
  {
    id: "3",
    title: "Paragraph",
    icon: [AlignLeft],
  },
  {
    id: "4",
    title: "Separator",
    icon: [TableRowsSplit],
  },
  {
    id: "5",
    title: "Spacer",
    icon: [SeparatorHorizontal],
  },
  {
    id: "6",
    title: "Text",
    icon: [Text],
  },
  {
    id: "7",
    title: "Number",
    icon: [FileDigit],
  },
  {
    id: "8",
    title: "Text Area",
    icon: [List],
  },
  {
    id: "9",
    title: "Date Picker",
    icon: [CalendarRange],
  },
  {
    id: "9",
    title: "Select",
    icon: [ChevronDown],
  },
  {
    id: "9",
    title: "Checkbox",
    icon: [CircleCheck],
  },
];

export type ElementTypes = "Text";

export type FormElementInstance = {
  id: string;
  type: ElementTypes;
  extraAttributes?: Record<string, any>;
};

export type FormElement = {
  type: ElementTypes;
  construct: (id: string) => FormElementInstance;
  designerBtnElement: {
    icon: React.ReactElement;
    label: string;
  };
  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

type FormElementsType = {
  // eslint-disable-next-line no-unused-vars
  [key in ElementTypes]: FormElement;
};

export const FormDraggableElements: FormElementsType = {
  Text: TextFieldElement,
};
