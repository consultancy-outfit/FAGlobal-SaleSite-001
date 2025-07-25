import SingleCheckboxFormField from "@/components/form-fields/single-checkbox-form-field";
import TextFormFields from "@/components/form-fields/text-form-field";
import { BodyText } from "@/components/text/body-text";
import { APP_ROUTES } from "@/constants/routes";
import { Typography } from "@mui/material";
import Link from "next/link";
import * as Yup from "yup";

export const contactUsFormValidationSchema = Yup?.object()?.shape({
  firstName: Yup?.string()?.trim()?.required("First name is required"),
  lastName: Yup?.string()?.trim()?.required("Last name is required"),
  email: Yup?.string()
    ?.trim()
    ?.email("Invalid email")
    ?.typeError("Invalid email")
    ?.required("Email is required"),
  query: Yup?.string()?.trim()?.required("Message is required"),
  phoneNumber: Yup?.string()?.trim()?.required("Phone number is required"),
  terms: Yup?.boolean()?.oneOf(
    [true],
    "You must accept the terms and conditions",
  ),
});

export const contactUsFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  query: "",
  phoneNumber: "",
  terms: false,
};

export const contactUsFormFields = [
  {
    _id: 1,
    componentProps: {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
      required: true,
    },
    component: TextFormFields,
    md: 6,
  },
  {
    _id: 2,
    componentProps: {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      required: true,
    },
    component: TextFormFields,
    md: 6,
  },
  {
    _id: 3,
    componentProps: {
      name: "email",
      label: "Your Email",
      placeholder: "Enter email",
      required: true,
    },
    component: TextFormFields,
    md: 6,
  },
  {
    _id: 4,
    componentProps: {
      name: "phoneNumber",
      label: "Phone number",
      placeholder: "Enter phone number",
      required: true,
    },
    component: TextFormFields,
    md: 6,
  },
  {
    _id: 5,
    componentProps: {
      name: "query",
      label: "Your Text",
      placeholder: "Type your question or query here...",
      required: true,
      rows: 6,
      multiline: true,
    },
    component: TextFormFields,
    md: 12,
  },
  {
    _id: 6,
    componentProps: {
      name: "terms",
      label: (
        <BodyText variant="body1">
          By submitting this form, you confirm that you have read and understood
          our{" "}
          <Typography
            component={Link}
            href={APP_ROUTES?.TERM_AND_CONDITION}
            sx={{ textDecoration: "underline", color: "primary.main" }}
          >
            Term & Conditions
          </Typography>
        </BodyText>
      ),
    },
    component: SingleCheckboxFormField,
    md: 12,
  },
];
