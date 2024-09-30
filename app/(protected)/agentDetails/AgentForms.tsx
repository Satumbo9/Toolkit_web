import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  boardingAgentSettingsSchema,
  boardingAgentDetailsSchema,
} from "@/lib/utils";

type AgentDetailsType = z.infer<typeof boardingAgentDetailsSchema>;
type AgentSettingsType = z.infer<typeof boardingAgentSettingsSchema>;

export const AgentDetailForms = () => {
  const form = useForm<AgentDetailsType>({
    resolver: zodResolver(boardingAgentDetailsSchema),
    defaultValues: {
      AgentCompanyName: "",
      DisplayName: "",
      FirstName: "",
      LastName: "",
      RelationshipManager: "",
      Address: "",
      SteApt: "",
      City: "",
      State: "",
      Zip: "",
      Email: "",
      RoutingNumber: "",
      Account: "",
      NoShippingEmails: true,
      ShippingAddress: "",
      ShippingAddress2: "",
      ShippingCity: "",
      ShippingState: "",
      ShippingZip: "",
      ShippingEmails: "",
    },
  });

  const onSubmit = (values: AgentDetailsType) => {
    console.log(values);
  };

  return { form, onSubmit };
};

export const AgentSettingsForm = () => {
  const form = useForm<AgentSettingsType>({
    resolver: zodResolver(boardingAgentSettingsSchema),
  });

  const onSubmit = (values: AgentSettingsType) => {
    console.log(values);
  };

  return { form, onSubmit };
};
