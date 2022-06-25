import { HgtColumn, HgtRow, HgtText } from "components/Hgt";
import { memo, FC, ReactNode } from "react";

type SkillsType = {
  name: string;
  icon: ReactNode;
};

type SkillsSectionProps = {
  skills: SkillsType[];
};

export const SkillsSection: FC<SkillsSectionProps> = memo(({ skills }) => {
  return (
    <HgtRow sx={{ maxWidth: "100%", flexWrap: "wrap" }}>
      {skills &&
        skills.map(({ name, icon }) => (
          <HgtColumn
            sx={{
              padding: "50px",
              width: "33%",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={name}
          >
            <HgtColumn>{icon}</HgtColumn>
            <HgtColumn sx={{ mt: "5px" }}>
              <HgtText>{name}</HgtText>
            </HgtColumn>
          </HgtColumn>
        ))}
    </HgtRow>
  );
});
