import homeFigmaData from "@/data/home-figma";
import HomeCommissionForm from "./HomeCommissionForm";
import HomeDesigns from "./HomeDesigns";
import HomeDiamondKnowledge from "./HomeDiamondKnowledge";
import HomeHero from "./HomeHero";
import HomeMarquee from "./HomeMarquee";
import HomeProcess from "./HomeProcess";
import HomeQuoteBand from "./HomeQuoteBand";
import HomeStory from "./HomeStory";

const HomeV2 = () => {
  return (
    <main className="rs-home">
      <HomeHero hero={homeFigmaData.hero} />
      <HomeMarquee items={homeFigmaData.marqueeItems} />
      <HomeProcess processSteps={homeFigmaData.processSteps} />
      <HomeDesigns designsSection={homeFigmaData.designsSection} />
      <HomeStory storyPanel={homeFigmaData.storyPanel} />
      <HomeDiamondKnowledge diamondCards={homeFigmaData.diamondCards} />
      <HomeCommissionForm
        commissionFormMeta={homeFigmaData.commissionFormMeta}
      />
      <HomeQuoteBand quoteBand={homeFigmaData.quoteBand} />
    </main>
  );
};

export default HomeV2;
