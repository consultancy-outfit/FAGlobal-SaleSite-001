"use client";
import { contactUsFormFields } from "./contact-form.data";
import { useContactUs } from "./use-contact-form";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { CommonCard } from "@/components/cards/common-card";
import { CommonLoadingButton } from "@/components/buttons/common-loading-button";
import { CommonCircularProgress } from "@/components/progress-bars/common-circular-progress";
import { HeadingText } from "@/components/text/heading-text";

const ContactForm = () => {
  const { methods, handleSubmit, submitContactUs, isLoading } = useContactUs();

  return (
    <CommonCard
      paddingX={{ xs: 1.5, sm: 2, md: 4 }}
      boxShadow="none"
      customStyles={{ pt: { md: 8, sm: 4, xs: 2 } }}
    >
      <HeadingText variant="h4" fontWeight="fontWeightMedium">
        Contact us
      </HeadingText>
      <br />
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitContactUs)}
      >
        <FormGrid formFieldsList={contactUsFormFields} size="small" />
        <br />
        <CommonLoadingButton
          variant="contained"
          color="primary"
          type="submit"
          size="small"
          loading={isLoading}
          disabled={isLoading}
          customStyles={{ p: "0.7rem 1rem", fontSize: 16 }}
          fullWidth
        >
          {isLoading ? <CommonCircularProgress /> : "Send Message!"}
        </CommonLoadingButton>
      </CustomFormProvider>
    </CommonCard>
  );
};

export default ContactForm;
