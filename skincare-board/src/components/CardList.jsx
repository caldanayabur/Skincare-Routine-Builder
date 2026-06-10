import Card from "./Card";
import cleanserImage from "../assets/Cleanser.png";
import tonerImage from "../assets/Toner.png";
import serumImage from "../assets/Serum.png";
import moisturizerImage from "../assets/Moisturizer.png";
import sunscreenImage from "../assets/Sunscreen.png";
import exfoliantImage from "../assets/Exfoliant.png";
import eyeCreamImage from "../assets/Eye_Cream.png";
import acneTreatmentImage from "../assets/Acne_Treatment.png";
import nightCareImage from "../assets/Night Care.png";
import lipCareImage from "../assets/Lip Care.png";

const stepImages = {
  Cleanser: cleanserImage,
  Toner: tonerImage,
  Serum: serumImage,
  Moisturizer: moisturizerImage,
  Sunscreen: sunscreenImage,
  Exfoliant: exfoliantImage,
  "Eye Cream": eyeCreamImage,
  "Acne Treatment": acneTreatmentImage,
  "Night Care": nightCareImage,
  "Lip Care": lipCareImage,
};

const CardList = () => {
  const cards = [
    {
      step: "Cleanser",
      description: "Removes dirt, oil, and buildup from your skin before the rest of your routine.",
      products: [
        {
          name: "CeraVe Foaming Facial Cleanser",
          price: 15,
          skinType: "Oily and combination skin",
          link: "https://www.target.com/s?searchTerm=CeraVe+Foaming+Facial+Cleanser",
        },
        {
          name: "Cetaphil Gentle Skin Cleanser",
          price: 12,
          skinType: "Dry and sensitive skin",
          link: "https://www.target.com/s?searchTerm=Cetaphil+Gentle+Skin+Cleanser",
        },
        {
          name: "La Roche-Posay Toleriane Hydrating Gentle Cleanser",
          price: 16,
          skinType: "Dry and sensitive skin",
          link: "https://www.target.com/s?searchTerm=La+Roche-Posay+Toleriane+Hydrating+Gentle+Cleanser",
        },
        {
          name: "Neutrogena Oil-Free Acne Wash",
          price: 10,
          skinType: "Acne-prone skin",
          link: "https://www.target.com/s?searchTerm=Neutrogena+Oil-Free+Acne+Wash",
        },
        {
          name: "Youth To The People Superfood Cleanser",
          price: 38,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=Youth+To+The+People+Superfood+Cleanser",
        },
      ],
    },
    {
      step: "Toner",
      description: "Helps refresh skin after cleansing and can add hydration or help manage oil.",
      products: [
        {
          name: "Thayers Facial Toner Witch Hazel",
          price: 11,
          skinType: "Oily and combination skin",
          link: "https://www.target.com/s?searchTerm=Thayers+Facial+Toner+Witch+Hazel",
        },
        {
          name: "Pixi Glow Tonic",
          price: 15,
          skinType: "Dull and uneven skin",
          link: "https://www.target.com/s?searchTerm=Pixi+Glow+Tonic",
        },
        {
          name: "Laneige Cream Skin Toner",
          price: 33,
          skinType: "Dry skin",
          link: "https://www.target.com/s?searchTerm=Laneige+Cream+Skin+Toner",
        },
        {
          name: "Paula's Choice Enriched Calming Toner",
          price: 24,
          skinType: "Dry and sensitive skin",
          link: "https://www.target.com/s?searchTerm=Paula%27s+Choice+Enriched+Calming+Toner",
        },
        {
          name: "BYOMA Balancing Face Mist",
          price: 15,
          skinType: "Combination skin",
          link: "https://www.target.com/s?searchTerm=BYOMA+Balancing+Face+Mist",
        },
      ],
    },
    {
      step: "Serum",
      description: "Targets specific concerns like dark spots, dryness, acne, or dullness with concentrated ingredients.",
      products: [
        {
          name: "The Ordinary Niacinamide 10% + Zinc 1%",
          price: 7,
          skinType: "Oily and acne-prone skin",
          link: "https://www.target.com/s?searchTerm=The+Ordinary+Niacinamide+10%25+%2B+Zinc+1%25",
        },
        {
          name: "La Roche-Posay Pure Vitamin C10 Serum",
          price: 45,
          skinType: "Dull skin",
          link: "https://www.target.com/s?searchTerm=La+Roche-Posay+Pure+Vitamin+C10+Serum",
        },
        {
          name: "L'Oreal Revitalift Hyaluronic Acid Serum",
          price: 30,
          skinType: "Dry skin",
          link: "https://www.target.com/s?searchTerm=L%27Oreal+Revitalift+Hyaluronic+Acid+Serum",
        },
        {
          name: "Good Molecules Discoloration Correcting Serum",
          price: 12,
          skinType: "Dark spots and uneven tone",
          link: "https://www.target.com/s?searchTerm=Good+Molecules+Discoloration+Correcting+Serum",
        },
        {
          name: "COSRX Snail Mucin Essence",
          price: 18,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=COSRX+Snail+Mucin+Essence",
        },
      ],
    },
    {
      step: "Moisturizer",
      description: "Locks in hydration and helps protect the skin barrier.",
      products: [
        {
          name: "CeraVe Moisturizing Cream",
          price: 16,
          skinType: "Dry skin",
          link: "https://www.target.com/s?searchTerm=CeraVe+Moisturizing+Cream",
        },
        {
          name: "Neutrogena Hydro Boost Water Gel",
          price: 19,
          skinType: "Oily and combination skin",
          link: "https://www.target.com/s?searchTerm=Neutrogena+Hydro+Boost+Water+Gel",
        },
        {
          name: "Vanicream Daily Facial Moisturizer",
          price: 13,
          skinType: "Sensitive skin",
          link: "https://www.target.com/s?searchTerm=Vanicream+Daily+Facial+Moisturizer",
        },
        {
          name: "Aveeno Calm + Restore Oat Gel Moisturizer",
          price: 22,
          skinType: "Sensitive and dry skin",
          link: "https://www.target.com/s?searchTerm=Aveeno+Calm+%2B+Restore+Oat+Gel+Moisturizer",
        },
        {
          name: "e.l.f. Holy Hydration Face Cream",
          price: 13,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=e.l.f.+Holy+Hydration+Face+Cream",
        },
      ],
    },
    {
      step: "Sunscreen",
      description: "Protects skin from UV damage and is one of the most important daily skincare steps.",
      products: [
        {
          name: "La Roche-Posay Anthelios Melt-In Milk Sunscreen SPF 60",
          price: 28,
          skinType: "Sensitive skin",
          link: "https://www.target.com/s?searchTerm=La+Roche-Posay+Anthelios+Melt-In+Milk+Sunscreen+SPF+60",
        },
        {
          name: "Neutrogena Ultra Sheer Dry-Touch SPF 55",
          price: 11,
          skinType: "Oily skin",
          link: "https://www.target.com/s?searchTerm=Neutrogena+Ultra+Sheer+Dry-Touch+SPF+55",
        },
        {
          name: "Black Girl Sunscreen SPF 30",
          price: 16,
          skinType: "Dry skin",
          link: "https://www.target.com/s?searchTerm=Black+Girl+Sunscreen+SPF+30",
        },
        {
          name: "EltaMD UV Clear SPF 46",
          price: 41,
          skinType: "Acne-prone and sensitive skin",
          link: "https://www.target.com/s?searchTerm=EltaMD+UV+Clear+SPF+46",
        },
        {
          name: "Sun Bum Face Lotion SPF 50",
          price: 14,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=Sun+Bum+Face+Lotion+SPF+50",
        },
      ],
    },
    {
      step: "Exfoliant",
      description: "Helps remove dead skin cells and improve texture. Usually used 1 to 2 times per week.",
      products: [
        {
          name: "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
          price: 35,
          skinType: "Oily and acne-prone skin",
          link: "https://www.target.com/s?searchTerm=Paula%27s+Choice+Skin+Perfecting+2%25+BHA+Liquid+Exfoliant",
        },
        {
          name: "The Ordinary Glycolic Acid 7% Toning Solution",
          price: 13,
          skinType: "Dull skin",
          link: "https://www.target.com/s?searchTerm=The+Ordinary+Glycolic+Acid+7%25+Toning+Solution",
        },
        {
          name: "Differin Daily Deep Cleanser",
          price: 11,
          skinType: "Acne-prone skin",
          link: "https://www.target.com/s?searchTerm=Differin+Daily+Deep+Cleanser",
        },
        {
          name: "Versed Weekend Glow Daily Brightening Solution",
          price: 18,
          skinType: "Combination skin",
          link: "https://www.target.com/s?searchTerm=Versed+Weekend+Glow+Daily+Brightening+Solution",
        },
        {
          name: "Pixi Glow Peel Pads",
          price: 22,
          skinType: "Normal to combination skin",
          link: "https://www.target.com/s?searchTerm=Pixi+Glow+Peel+Pads",
        },
      ],
    },
    {
      step: "Eye Cream",
      description: "Targets puffiness, dryness, and dark circles around the eyes.",
      products: [
        {
          name: "CeraVe Eye Repair Cream",
          price: 15,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=CeraVe+Eye+Repair+Cream",
        },
        {
          name: "RoC Retinol Correxion Eye Cream",
          price: 25,
          skinType: "Aging skin",
          link: "https://www.target.com/s?searchTerm=RoC+Retinol+Correxion+Eye+Cream",
        },
        {
          name: "e.l.f. Holy Hydration Eye Cream",
          price: 10,
          skinType: "Dry skin",
          link: "https://www.target.com/s?searchTerm=e.l.f.+Holy+Hydration+Eye+Cream",
        },
        {
          name: "The Inkey List Caffeine Eye Cream",
          price: 11,
          skinType: "Puffy under-eyes",
          link: "https://www.target.com/s?searchTerm=The+Inkey+List+Caffeine+Eye+Cream",
        },
        {
          name: "Olay Eyes Ultimate Eye Cream",
          price: 29,
          skinType: "Dark circles and fine lines",
          link: "https://www.target.com/s?searchTerm=Olay+Eyes+Ultimate+Eye+Cream",
        },
      ],
    },
    {
      step: "Acne Treatment",
      description: "Helps reduce breakouts and inflammation with ingredients like benzoyl peroxide or adapalene.",
      products: [
        {
          name: "Differin Gel Adapalene Treatment",
          price: 15,
          skinType: "Acne-prone skin",
          link: "https://www.target.com/s?searchTerm=Differin+Gel+Adapalene+Treatment",
        },
        {
          name: "PanOxyl Acne Foaming Wash",
          price: 10,
          skinType: "Oily and acne-prone skin",
          link: "https://www.target.com/s?searchTerm=PanOxyl+Acne+Foaming+Wash",
        },
        {
          name: "Hero Mighty Patch Original",
          price: 9,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=Hero+Mighty+Patch+Original",
        },
        {
          name: "Neutrogena Rapid Clear Stubborn Acne Spot Gel",
          price: 11,
          skinType: "Spot treatment",
          link: "https://www.target.com/s?searchTerm=Neutrogena+Rapid+Clear+Stubborn+Acne+Spot+Gel",
        },
        {
          name: "Clean & Clear Persa-Gel 10",
          price: 7,
          skinType: "Acne-prone skin",
          link: "https://www.target.com/s?searchTerm=Clean+%26+Clear+Persa-Gel+10",
        },
      ],
    },
    {
      step: "Night Care",
      description: "Uses products meant to repair, hydrate, and support the skin overnight.",
      products: [
        {
          name: "CeraVe PM Facial Moisturizing Lotion",
          price: 15,
          skinType: "Normal to oily skin",
          link: "https://www.target.com/s?searchTerm=CeraVe+PM+Facial+Moisturizing+Lotion",
        },
        {
          name: "Laneige Water Sleeping Mask",
          price: 32,
          skinType: "Dry skin",
          link: "https://www.target.com/s?searchTerm=Laneige+Water+Sleeping+Mask",
        },
        {
          name: "The Ordinary Retinol 0.5% in Squalane",
          price: 9,
          skinType: "Aging or textured skin",
          link: "https://www.target.com/s?searchTerm=The+Ordinary+Retinol+0.5%25+in+Squalane",
        },
        {
          name: "Good Molecules Overnight Exfoliating Treatment",
          price: 14,
          skinType: "Dull skin",
          link: "https://www.target.com/s?searchTerm=Good+Molecules+Overnight+Exfoliating+Treatment",
        },
        {
          name: "e.l.f. Holy Hydration Sleeping Mask",
          price: 14,
          skinType: "Dry and dehydrated skin",
          link: "https://www.target.com/s?searchTerm=e.l.f.+Holy+Hydration+Sleeping+Mask",
        },
      ],
    },
    {
      step: "Lip Care",
      description: "Keeps lips hydrated, smooth, and protected from dryness and cracking.",
      products: [
        {
          name: "Aquaphor Lip Repair",
          price: 5,
          skinType: "Dry and chapped lips",
          link: "https://www.target.com/s?searchTerm=Aquaphor+Lip+Repair",
        },
        {
          name: "Burt’s Bees Beeswax Lip Balm",
          price: 4,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=Burt%27s+Bees+Beeswax+Lip+Balm",
        },
        {
          name: "Laneige Lip Sleeping Mask",
          price: 24,
          skinType: "Very dry lips",
          link: "https://www.target.com/s?searchTerm=Laneige+Lip+Sleeping+Mask",
        },
        {
          name: "e.l.f. Squeeze Me Lip Balm",
          price: 5,
          skinType: "Normal to dry lips",
          link: "https://www.target.com/s?searchTerm=e.l.f.+Squeeze+Me+Lip+Balm",
        },
        {
          name: "Vaseline Lip Therapy",
          price: 4,
          skinType: "All skin types",
          link: "https://www.target.com/s?searchTerm=Vaseline+Lip+Therapy",
        },
      ],
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.step}
          step={card.step}
          description={card.description}
          products={card.products}
          image={stepImages[card.step]}
        />
      ))}
    </div>
  );
};

export default CardList;