import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from "../../assets";

const WhatOurCustomersSaySection = () => {
  const data = [
    {
      id: 1,
      image: Avatar1,
      name: "Ahmed R.",
      title: "CEO, ClickCart",
      description:
        "“We’ve reduced payment failures drastically by switching to direct bank transfers through Open Banking.”",
    },
    {
      id: 2,
      image: Avatar2,
      name: "James T.",
      title: "Head of Product, PayDirect",
      description:
        "“Simple integration, bank-grade security, and instant payments — we couldn’t be happier.”",
    },
    {
      id: 3,
      image: Avatar3,
      name: " Sana K.",
      title: " CEO, CreditMint",
      description:
        "“Their Open Banking platform helped us deliver real-time affordability checks with customer consent. No more slow credit checks.”",
    },
    {
      id: 4,
      image: Avatar4,
      name: " Priya D.",
      title: "Risk Analyst, CreditLoop",
      description:
        "“We’ve replaced outdated credit checks with real-time income verification. It’s faster for us and better for our users.”",
    },
    {
      id: 5,
      image: Avatar5,
      name: " Tom E.",
      title: "CTO, Finera",
      description:
        "“The API documentation was clear and straightforward. Our developers had everything up and running in under a week.”",
    },
    {
      id: 6,
      image: Avatar6,
      name: "Hannah J.",
      title: "Product Manager, Budgr",
      description:
        "“Thanks to their Open Banking tools, our budgeting app now pulls real-time account data with full customer consent.”",
    },
  ];
  return (
    <Box px={{ xs: 2, md: 10 }} pt={5}>
      <Stack>
        <Stack spacing={1}>
          <Typography
            fontSize={"2.5rem"}
            fontWeight={600}
            fontFamily={"Inter"}
            textAlign="left"
          >
            What our Customers Say
          </Typography>
          <Typography
            fontSize={"1.25rem"}
            fontWeight={500}
            fontFamily={"Inter"}
            color="#575757"
            textAlign="left"
          >
            Real stories from users who trust and grow with us.{" "}
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {data?.map((items) => (
            <Grid size={{ lg: 4, md: 6, xs: 12 }} key={items?.id}>
              <Card
                sx={{
                  backgroundColor: "#FAFAFA",
                  p: 2,
                  borderRadius: 5,
                  boxShadow: 2,
                  height: "23rem",
                }}
              >
                <Stack spacing={2}>
                  <Avatar
                    sx={{ width: 64, height: 64 }}
                    src={items?.image.src}
                    alt=""
                  />
                  <Typography
                    fontFamily="Inter"
                    fontWeight={600}
                    fontSize="1rem"
                    textAlign="left"
                  >
                    {items?.name}
                    <Typography
                      component="p"
                      fontFamily="Inter"
                      fontWeight={500}
                      fontSize="0.938rem"
                      textAlign="left"
                    >
                      {items?.title}
                    </Typography>
                  </Typography>
                  <Typography
                    fontFamily="Inter"
                    fontWeight={600}
                    fontSize="1.375rem"
                    textAlign="left"
                  >
                    {items?.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default WhatOurCustomersSaySection;
