import {
  BasicDbsCheckIcon,
  EnhancedDbsCheckIcon,
  StandardDbsCheckIcon,
} from "../../assets/icons";

export const servicesOfferListData: any = {
  1: {
    mainHeading: "Choosing the Right DBS Check for Your Needs",
    offerServices: [
      {
        _id: 1,
        heading: "Basic DBS Checks",
        description:
          "Perfect for roles with minimal interaction with vulnerable groups, our Basic DBS Checks offer insight into an individual’s unspent convictions. This essential check helps build trust while ensuring a smooth and efficient hiring process.",
        icon: <BasicDbsCheckIcon />,
        backgroundColor: "info.light",
      },
      {
        _id: 2,
        heading: "Standard DBS Checks",
        description:
          "For positions involving regular contact with vulnerable groups or greater responsibilities, our Standard DBS Checks provide deeper insight beyond unspent convictions. They cover spent convictions, cautions, reprimands, and warnings, ensuring a more thorough assessment of a candidate’s criminal history.",
        icon: <StandardDbsCheckIcon />,
        backgroundColor: "warning.light",
        borderColor: "warning.dark",
      },
      {
        _id: 3,
        heading: "Enhanced DBS Checks",
        description:
          "For roles with significant responsibility or close contact with vulnerable individuals, our Enhanced DBS Checks offer the highest level of scrutiny. In addition to the details from a Standard DBS Check, they include any relevant information held by local police, ensuring a thorough assessment for sensitive positions.",
        icon: <EnhancedDbsCheckIcon />,
        backgroundColor: "success.light",
      },
    ],
  },
};
