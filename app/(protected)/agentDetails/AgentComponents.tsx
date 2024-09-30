"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AgentDetailForms, AgentSettingsForm } from "./AgentForms";
import { Form } from "@/components/ui/form";
import { InputForm } from "@/components/Shared/InstantForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AgentDetails = () => {
  const [noShippingEmails, setNoShippingEmails] = useState<boolean>(true);
  const { form, onSubmit } = AgentDetailForms();
  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Agent Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-5">
            <Input placeholder="Search..." />
            <Button>Search</Button>
          </div>

          <hr className="mt-6" />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="DisplayName"
                    label="Display Name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="RelationshipManager"
                    label="Relationship Manager"
                    placeholder="Relationship Manager"
                  />
                </div>
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="FirstName"
                    label="First Name"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="LastName"
                    label="Last Name"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <InputForm
                  control={form.control}
                  formName="Address"
                  label="Address"
                  placeholder="4021 N 75th"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="City"
                    label="City"
                    placeholder="Scottsdale"
                  />
                </div>
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="State"
                    label="State"
                    placeholder="AZ"
                  />
                </div>
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="Zip"
                    label="Zip"
                    placeholder="85251"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <InputForm
                  control={form.control}
                  formName="Email"
                  label="Email"
                  placeholder="micamp@example.com"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="RoutingNumber"
                    label="Routing Number"
                    placeholder="1234567890"
                  />
                </div>
                <div className="space-y-2">
                  <InputForm
                    control={form.control}
                    formName="Account"
                    label="Account"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="noShippingEmails"
                    checked={noShippingEmails}
                    onCheckedChange={setNoShippingEmails}
                  />
                  <Label htmlFor="noShippingEmails">
                    No Shipping Emails, please
                  </Label>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                  <InputForm
                    control={form.control}
                    formName="ShippingAddress"
                    label="Shipping Address"
                    placeholder="4021 N 75th"
                  />
                  <InputForm
                    control={form.control}
                    formName="ShippingAddress2"
                    label="Shipping Address 2"
                    placeholder="Somewhere Street"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="ShippingCity"
                      label="City"
                      placeholder="Scottsdale"
                    />
                  </div>
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="ShippingState"
                      label="State"
                      placeholder="AZ"
                    />
                  </div>
                  <div className="space-y-2">
                    <InputForm
                      control={form.control}
                      formName="ShippingZip"
                      label="Zip"
                      placeholder="85251"
                    />
                  </div>
                </div>

                {!noShippingEmails && (
                  <div className="space-y-4">
                    <InputForm
                      control={form.control}
                      formName="ShippingEmails"
                      label="Email"
                      placeholder="example@email.com"
                    />
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full">
                Save
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

const AgentSettings = () => {
  const [hideEquipmentPrice, setHideEquipmentPrice] = useState(false);
  const { form, onSubmit } = AgentSettingsForm();

  return (
    <div>
      <div className="container mx-auto space-y-6">
        <h1 className="mb-6 text-3xl font-bold text-white">Agent Settings</h1>

        <Card className="bg-gray-800 text-white">
          <CardHeader>
            <CardTitle className="text-xl">Agent / Company Selection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-5">
              <Input placeholder="Search..." className="bg-gray-700" />
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="common" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2 bg-gray-700 lg:grid-cols-5">
            <TabsTrigger value="common">Common To ALL</TabsTrigger>
            <TabsTrigger value="fsp">FSP Only</TabsTrigger>
            <TabsTrigger value="north-omaha">North / Omaha</TabsTrigger>
            <TabsTrigger value="wavit">WAVit Only</TabsTrigger>
            <TabsTrigger value="interchange">Interchange Only</TabsTrigger>
          </TabsList>

          <TabsContent value="common">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">
                  Common To ALL (North / Omaha / WAVit Interchange / FSP)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="earlyTerminationFee"
                          label="Early Termination Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="monthlyFee"
                          label="Monthly Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                    </div>
                  </form>
                </Form>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="hideEquipmentPrice"
                    checked={hideEquipmentPrice}
                    onCheckedChange={setHideEquipmentPrice}
                  />
                  <Label htmlFor="hideEquipmentPrice">
                    Hide Equipment Price
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fsp">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">FSP Only</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="voiceAuthorization"
                          label="Voice Authorization"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="audioResponse"
                          label="Audio Response (ARU)"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="voiceAddressVerification"
                          label="Voice Address Verification"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="tinInvalidFee"
                          label="TIN Invalid Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="achRejectFee"
                          label="ACH Reject Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="chargebackFee"
                          label="Chargeback Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="monthlyStatementFee"
                          label="Monthly Statement Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="north-omaha">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">
                  Common To North / Omaha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="monthlyFeeNO"
                          label="Monthly Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="achRejectFeeNO"
                          label="ACH Reject Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wavit">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">
                  Cash Discount Flat Rate (WAVit Only)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="cashDiscountRate"
                          label="Cash Discount Rate"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="discountRate"
                          label="Discount %"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interchange">
            <Card className="bg-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Interchange Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Omaha Interchange Only
                </h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="visaMcChargebackFee">
                          Visa/MC Chargeback Fee $:
                        </Label>
                        <Input
                          id="visaMcChargebackFee"
                          type="number"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="visaMcRetrievalFee">
                          Visa/MC Retrieval Fee $:
                        </Label>
                        <Input
                          id="visaMcRetrievalFee"
                          type="number"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      North WAVit and Interchange Only
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="amexChargebackFee"
                          label="AMEX Chargeback Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="discoverChargebackFee"
                          label="Discover Chargeback Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="retrievalFee"
                          label="Retrieval Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="amexChargebackRetrievalFee"
                          label="AMEX Chargeback Retrieval Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="discoverRetrievalFee"
                          label="Discover Retrieval Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="visaMcDiscoverChargebackRetrievalFee"
                          label="Visa/MC/Discover Chargeback Retrieval Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                      <div className="space-y-2">
                        <InputForm
                          control={form.control}
                          formName="monthlyStatementFeeInterchange"
                          label="Monthly Statement Fee"
                          placeholder="0.00"
                          className="bg-gray-700"
                        />
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end">
          <Button size="lg">Save Settings</Button>
        </div>
      </div>
    </div>
  );
};

export default function AgentComponents({ isAdmin }: { isAdmin: boolean }) {
  return (
    <React.Fragment>
      {isAdmin ? (
        <div className="container mx-auto p-6">
          <Tabs defaultValue="details">
            <div className="flex items-center justify-center space-x-6">
              <TabsList>
                <TabsTrigger value="details">Agent Details</TabsTrigger>
              </TabsList>
              <TabsList>
                <TabsTrigger value="settings">Agent Settings</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="details">
              <AgentDetails />
            </TabsContent>
            <TabsContent value="settings">
              <AgentSettings />
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <AgentDetails />
      )}
    </React.Fragment>
  );
}
