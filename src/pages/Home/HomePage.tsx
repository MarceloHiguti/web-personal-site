import { FC } from "react";
import {
  HgtButton,
  HgtColumn,
  HgtImage,
  HgtRow,
  HgtText,
} from "components/Hgt";
import { useTheme } from "@emotion/react";
import { skillsMarceloHiguti } from "components/SkillsSection/skillsMarceloHiguti";
import { SkillsSection } from "components/SkillsSection/SkillsSection";
import { ProfessionalExperience } from "components/ProfessionalExperience/ProfessionalExperienceCard";

export const HomePage: FC = () => {
  const theme = useTheme();

  console.log("theme", theme);
  // console.log("theme", theme);
  return (
    <HgtColumn sx={{ flex: 1 }}>
      {/* First Step Section */}
      <HgtRow sx={{ paddingX: "10%", mt: "50px" }}>
        <HgtColumn sx={{ flex: 1 }}>
          <HgtText variant="h2" sx={{ fontSize: "2.5rem" }}>
            Welcome to Marcelo Higuti Curriculum Vitae
          </HgtText>
          <HgtButton
            sx={{ width: "50%", mt: "50px" }}
            variant="contained"
            onClick={() => console.log("download")}
          >
            Download CV
          </HgtButton>
        </HgtColumn>
        <HgtColumn sx={{ flex: 1 }}>
          <HgtImage
            style={{ width: "50%", height: "100%" }}
            src={
              "https://static.vecteezy.com/ti/vetor-gratis/p1/2868320-vector-design-of-curriculum-vitae-with-photo-of-boy-curriculo-para-busca-de-emprego-com-lupa-vetor.jpg"
            }
          />
        </HgtColumn>
      </HgtRow>

      {/* Second Step Section */}
      <HgtColumn sx={{ position: "relative", display: "flex", mt: "100px" }}>
        <HgtImage
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          src={
            "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/270861/0122-uiuxfrontend-Waldek_Social-836df1eeafa62b99011d845c4163cfdc.png"
          }
        />
        <HgtColumn
          sx={{
            position: "absolute",
            background: "rgba(0, 0, 0, 0.4)",
            width: "100%",
            height: "100%",
          }}
        ></HgtColumn>
        <HgtColumn
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HgtText variant="h2" sx={{ fontSize: "2.5rem", color: "white" }}>
            Front-End Developer
          </HgtText>
        </HgtColumn>
      </HgtColumn>

      {/* Third Step Section */}
      <HgtRow sx={{ paddingX: "10%", display: "flex", mt: "100px" }}>
        <HgtColumn sx={{ flex: 1 }}>
          <HgtText sx={{ fontSize: "2.5rem" }}>Technical Skills</HgtText>
          <HgtText sx={{ fontSize: "1.2rem", mt: "20px" }}>
            Here are some of the skills that I developed since 2014
          </HgtText>
        </HgtColumn>
        <HgtColumn sx={{ flex: 1 }}>
          <SkillsSection skills={skillsMarceloHiguti} />
        </HgtColumn>
      </HgtRow>
      {/* Forth Step Section */}
      <HgtRow sx={{ display: "flex", mt: "100px" }}>
        <ProfessionalExperience />
      </HgtRow>
    </HgtColumn>
  );
};
