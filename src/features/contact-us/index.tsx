"use client";
import { ContainerGridLayout } from "@/components/layouts/container-grid-layout";
import { ContactInfoCard, Hero, ContactForm } from "./components";
import { ItemGridLayout } from "@/components/layouts/item-grid-layout";
import { Container } from "@mui/material";
import { CommonCard } from "@/components/cards/common-card";
import ScaleInView from "@/components/animations/animation-scroll/scale-in-view";

export const ContactUsFeature = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="xl">
        <ScaleInView>
          <CommonCard
            borderRadius={8}
            customStyles={{
              mt: { lg: "-12rem", md: "-8rem", xs: "-4rem" },
              mb: { md: 8, sm: 4, xs: 2 },
            }}
          >
            <ContainerGridLayout>
              <ItemGridLayout md={5}>
                <ContactInfoCard />
              </ItemGridLayout>
              <ItemGridLayout md={7}>
                <ContactForm />
              </ItemGridLayout>
            </ContainerGridLayout>
          </CommonCard>
        </ScaleInView>
      </Container>
    </>
  );
};
