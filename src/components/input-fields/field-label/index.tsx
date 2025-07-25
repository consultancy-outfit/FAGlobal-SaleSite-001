"use client";
import { Typography } from "@mui/material";
import { FieldLabelPropsI } from "../input-fields.interface";

const FieldLabel = (props: FieldLabelPropsI) => {
  const { label, required = false, marginBottom = 0.6 } = props;

  return (
    <Typography
      variant="body1"
      sx={{
        color: "text.primary",
        marginBottom: marginBottom,
        fontWeight: "fontWeightMedium",
      }}
    >
      {label}
      {required && (
        <Typography
          component="span"
          sx={{ lineHeight: "1", color: "error.main" }}
        >
          {" "}
          *{" "}
        </Typography>
      )}
    </Typography>
  );
};

export default FieldLabel;
