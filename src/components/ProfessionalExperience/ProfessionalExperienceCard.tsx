import { CheckmarkIcon } from "assets";
import { HgtBasicCard, HgtColumn, HgtRow, HgtText } from "components/Hgt";
import { FC } from "react";
import { ingenicoExperience } from "./jobExperiences";

export const ProfessionalExperience: FC = () => {
  return (
    <HgtBasicCard
      sxCard={{ width: "30%" }}
      title="Ingenico"
      subheader="REMOTE | 2021 – CURRENT"
    >
      <HgtText sx={{ mb: "20px" }}>
        Development of several tools that make up a new product in the payment
        systems market for companies to configure the services available on
        their terminals in a simple, fast, reliable and modular way
      </HgtText>
      {ingenicoExperience.map(({ key, title }) => (
        <HgtRow sx={{ mt: "10px" }} key={key}>
          <HgtColumn sx={{ width: "10%" }}>
            <CheckmarkIcon width={25} height={25} />
          </HgtColumn>
          <HgtColumn sx={{ width: "90%" }}>
            <HgtText>{title}</HgtText>
          </HgtColumn>
        </HgtRow>
      ))}
    </HgtBasicCard>
  );
};
