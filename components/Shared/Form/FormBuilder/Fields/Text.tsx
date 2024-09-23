"use client";

import React from "react";
import { ElementTypes, FormElement } from "..";
import { Text } from "lucide-react";

const type: ElementTypes = "Text";

export const TextFieldElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text",
      helperText: "Helper Text",
      required: true,
      placehodler: "Value here.",
    },
  }),
  designerBtnElement: {
    icon: <Text />,
    label: "Text",
  },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};
