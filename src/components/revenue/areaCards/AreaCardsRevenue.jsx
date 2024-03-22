import AreaCardRevenue from "./AreaCardRevenue";
import "./AreaCardsRevenue.scss";

const AreaCardsRevenue = () => {
  return (
    <section className="content-area-cards">
      <AreaCardRevenue
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={70} // Adjust percent fill value for credit card
        cardInfo={{
          title: "Top Earning Payment Method",
          text1: "Credit Card  2000",
          text2: "Debit Card   3200",
          text3: "Net Banking  2000"
        }}
      />
      <AreaCardRevenue
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={60} // Adjust percent fill value for geographical regions
        cardInfo={{
          title: "Geographical Wise Earning",
          text1: "India     2000",
          text2: "Australia 2000",
          text3: "USA       2000"
        }}
      />
      <AreaCardRevenue
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={80} // Adjust percent fill value for currency types
        cardInfo={{
          title: "Currency Wise Earning",
          text1: "Dollar   2000",
          text2: "Rupee    2000",
          text3: "Euro     2000"
        }}
      />
    </section>
  );
};

export default AreaCardsRevenue;
